# NodeJS e JWT

## Função hash

Uma função hash ou função de espalhamento consegue tornar nossas senhas em algo aparentemente
aleatório. As funções hash mais conhecidas no mercado são sha-256 e a md5, no entanto mesmo
utilizando funções hashh um hacker consegue descriptar as senhas utilizando tabelas hash
e o rainbow attack, para dificultar estas operações usamos um incremento com o salt que é
uma string única e aleatória. Para incrementar ainda mais podemos utilizar uma função de custo,
que irá determinar em quanto tempo a função será executada, diminuindo o número de tentativas que podem ser realizadas.
A função utilizada será a Bcrypt.hash.

```
npm install bcrypt
```

## Custo e ataque DDoS

Se o custo computacional for alto demais o hacker pode tentar realizar um ataque DDoS, isto é
disparando várias requisições simultâneas a fim de derrubar o servidor com o alto processamento.
Para evitar este tipo de coisa podemos utilizar um custo entre 12 e 14, caso um custo alto seja
necessário deveremos utilizar um mecanismo proof-of-work para se defender do ataque DDoS.

## Sistema de login

Sistemas de seção são úteis, mas atrapalham a escalabilidade do sistema, uma vez que as seções
são armazenadas em um único servidor o que leva a um custo computacional muito grande e também
vai contra os príncipios do REST, pois o acesso do usuário armazena estado.
Uma forma mais eficaz de utizar uma seção é utilizando o id do usuário como token e adicionando
uma assinatura do servidor que comprove que o id está sendo enviado pelo usuário e não por alguém
se passando pelo usuário, podemos fazer isso utilizando o JSON Web Token ou JWT.
Para compor o token o JWT utiliza três informações básicas:

- Payload: O payload são as informações que realmente importam e estão sendo transportadas a outras
  informações que servem apenas para validação.
- HMAC-SHA256: É um algoritmo baseado em HMAC (Hash-based Message Authentication Code), que é um tipo
  de autentificador de mensagens, envolvendo uma função de hash e uma chave secreta.
- Base64URL: É uma variação da codificação Base64, criada para permitir seu uso em nomes de arquivos
  ou endereços URL.

## Passport

O passport é um middleware de autenticação do NodeJS, para utilizá-lo devemos instalar também uma de
suas strategies que podem ser: autenticação pelo google, facebook, local, etc.

```
npm install passport
npm install passport-local
```

Podemos ver as 502 (até o momento) estratégias de autenticação do passport em:
[Passport](http://www.passportjs.org)

Neste caso utilizaremos a estratégia de autenticação local, esta estratégia utiliza um username e uma
senha:

```
function verificaUsuario(usuario) {
  if (!usuario) {
    throw new InvalidArgumentError("Não existe usuário com esse email");
  }
}

function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash);
  if(!senhaValida) {
      throw new InvalidArgumentError('E-mail ou senha inválidos');
  }
}

passport.use(
  new Strategy(
    {
      usernamField: "email",
      passwordField: "senha",
      session: false,
    },
    async (email, senha, done) => {
      try {
        const usuario = await Usuario.buscaPorEmail(email);
        verificaUsuario(usuario);
        await verificaSenha(senha, usuario.senha);

        done(null, usuario);
      } catch (erro) {
        done(erro);
      }
    }
  )
);
```

No caso acima verificamos a existência do usuário, caso ele exista verificamos sua senha, se tudo
estiver ok retornamos o token JWT providenciado pelo passport.
Nossa rota de login fica então:

```
 app
    .route("/usuario/login")
    .post(
      passport.authenticate("local", { session: false }),
      usuariosControlador.login
    );
```

## JWT

A lib JSONWebToken irá providenciar nosso token para validar o acesso do usuário sem que precisemos
armazenar sessão, este token é composto de três partes separadas por ponto:

- Cabeçalho: O cabeçalho do JWT possui o tipo de token (JWT) e o tipo de algoritmo utilizado para a função hash, geralmente "HS256".
- Payload: A carga efetivamente carregada pelo token, trata-se de uma informação que identifica o
  usuário.
- Senha secreta: Uma assinatura que confirma que o token foi realmente enviado pelo servidor.

## Senha secreta e variáveis de ambiente

As senhas deverão ser aleatórias e complexas, para tanto podemos utilizar um módulo do próprio Node
denominado crypto.

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

Devemos ter cuidado e não utilizar senhas diretamente dentro do nosso código, pois as mesmas ficarão expostas dentro do nosso diretório do github. Para isso utilizamos variáveis de ambiente, as variáveis
de ambiente no node ficam armazenadas dentro de arquiv .env, que deve ser incluido no .gitignore. Podemos utilizar uma biblioteca chamada 'dotenv' para consumí-las em nosso código.
Esta biblioteca é chamada na nossa primeira linha de código do servidor para disponibilizar nossas
variáveis de ambiente.

Arquivo env (Não quebre linhas):

```
CHAVE_JWT="mgWXCow4BASWrkhVYTHMN7GgDj46RUKOobRNpAt...
```

server.js

```
require('dotenv').config();
```

arquivo que cria o token:

```
function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id,
  };

  const token = jwt.sign(
    payload, process.env.CHAVE_JWT
  );
  return token;
}
```

## Estratégia de autenticação com Bearer token

Podemos utilizar a estratégia de autenticação Bearer token para validar os tokens enviados
para o cliente sem ser necessário armazenar sessão:

```
npm install passport-http-bearer
```

Nosso middleware para autenticação de token fica:

```
passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.CHAVE_JWT);
      const usuario = await Usuario.buscaPorId(payload.id);
      done(null, usuario);
    } catch (erro) {
      done(erro);
    }
  })
);
```

```
app
  .route("/post")
  .get(postsControlador.lista)
  .post(
    passport.authenticate("bearer", { session: false }),
    postsControlador.adiciona
  );
```

## Trantando erros de autenticação

O passport trata erros de autenticação como erro 500, para trabalhar melhor as mensagens de
erro para o usuário deveremos utilizar um middleware personalizado:

```
module.exports = {
  local: (req, res, next) => {
    passport.authenticate(
      "local",
      { session: false },
      (erro, usuario, info) => {
        if (erro && erro.name === "InvalidArgumentError") {
          return res.status(401).json({ erro: erro.message });
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message });
        }

        if (!usuario) {
          return res.status(401).json();
        }

        req.user = usuario;
        return next();
      }
    )(req, res, next);
  },
};
```

Utilizamos uma função middleware que irá retornar o middleware do passport, desta forma
podemos ter acesso aos parâmetros que o passport irá receber.
O passport recebe como terceiro parâmetro uma função que possui três parâmetros, erro, usuário e info.

- Erro: Erro emitido pelo passport;
- Usuário: Dados emitidos na função done(null, user);
- Info: Mensagem opcional que pode ser configurado
  para cada erro na função done(null, user, {message});

Da mesma forma podemos tratar os erros das outras estratégias

## Chave assimétrica

No caso que foi abordado até agora o servidor que gera a chave é o mesmo servidor que a
verifica, neste caso utilizamos um chave simétrica com algoritmo simétrico de assinatura
(HMAC + SHA256), porém caso trabalhemos com dois servidores
para gerar e validar as chaves necessitaremos trabalhar com chaves assimétricas.
Os algoritmos de assinatura assimétricos mais comuns são os RS256 (RSA + SHA256) e ES256
(ECDSA + SHA256), sendo que o RSA é o mais rápido, mas o ECDSA permite chaves menores.
A escolha depende do caso de uso.

### Programa de geração de chave:

```

const fs = require('fs');
const { generateKeyPair } = require('crypto');

// substituir 'senha super secreta' por uma senha aleatória
// e guardada em variável de ambiente
const senha = 'senha super secreta';

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: senha
  }
}, (erro, chavePublica, chavePrivada) => {
    fs.writeFileSync('public.pem', chavePublica);
    fs.writeFileSync('private.key', chavePrivada);
    }
);
```

### Servidor que gera o token

```
// [...]
const fs = require('fs');
const jwt = require('jsonwebtoken');

// o arquivo 'private.key' pode não estar no mesmo diretório que o programa
const privateKey = fs.readFileSync('private.key');

// substituir 'senha super secreta' pela senha usada na geração
// das chaves e guardada em variáveis de ambiente
const senha = 'senha super secreta';

const token = jwt.sign(
    payload,
    { key: privateKey, passphrase: senha},
    { algorithm: 'RS256', expiresIn: tempoExpiracao }
);

// [...]
```

### Servidor que lê a chave

```
// [...]
const fs = require('fs');
const jwt = require('jsonwebtoken');

// o modo como o serviço adquire a chave pública pode
// variar de acordo com a implementação
const publicKey = fs.readFileSync('public.pem');

const payload = jwt.verify(token, publicKey);
// [...]
```

[https://www.pingidentity.com/en/company/blog/posts/2019/jwt-security-nobody-talks-about.html](Artigo sobre chaves simétricas e assimétricas)

## Black List

Para termos controle de logout sobre nossos tokens, podemos armazená-los no formato de black
list, ou seja, conforme os tokens são expirados, são removidos desta lista e passam a não
ser mais válidos, para isso precisamos de uma base de dados perfomática para executar o
armazenamento e leitura destes tokens.
O rédis é uma base de dados chave/valor que funciona em memória cache, muito conhecida pela sua
performance.

Para acessarmos o servidor redis que está sendo executado em nossa máquina precisaremos utilizar
o cliente redis em nosso servidor.

```
npm install redis
```

### blacklist.js

```
const redis = require('redis');
module.exports = redis.createClient({ prefix: 'blacklist:' });
```

### manipula-blacklist.js

```
const blacklist = require("./blacklist");

const { promisify } = require("util");

const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);

const jwt = require("jsonwebtoken");

const { createHash } = require("crypto");

function geraTokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}

module.exports = {
  adiciona: async (token) => {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await setAsync(tokenHash, "");
    blacklist.expireat(token, dataExpiracao);
  },
  contemToken: async (token) => {
    const tokenHash = geraTokenHash(token);
    const resultado = await existsAsync(tokenHash);
    return resultado === 1;
  },
};
```

Os métodos .exists e .set são métodos assíncronos, assim como o método writeFile do node.js.
Para lidarmos com eles sem ter de envolvê-los com um wrapper de uma promisse podemos utilizar o
método promisify do node que faz isso para você.

```
const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);
```

O método ".exists" confere em nossa base de dados se a chave existe e retorna um valor 1 (true) ou
0 (false).
Já o método ".set" insere em nossa base de dados uma chave/valor, neste caso usaremos como chave
o token e como valor um string vazia.
```
adiciona: async (token) => {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geraTokenHash(token);
    await setAsync(tokenHash, "");
    blacklist.expireat(token, dataExpiracao);
  },
  contemToken: async (token) => {
    const tokenHash = geraTokenHash(token);
    const resultado = await existsAsync(tokenHash);
    return resultado === 1;
  },
```
Para economizarmos espaço em memória transformamos nosso token em um hash, para isso utilizaremos
o método ".createHash" que o crypto, um módulo do Node, nos oferece.
```
function geraTokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}
```
O primeiro argumento "sha256" é o algoritmo de hash que desejamos usar, token se trata do
dado que queremos transformar e hex o tipo de codificação utilizada, hexadecimal.

Por fim o próprio Redis permite adicionar um tempo de expiração para os dados da base,
o que irá removê-los. Para isto, vamos obter estes dados do próprio payload do token, usando
o método decode().exp e definí-lo no Redis usando o método .expireat(token, dataExpiracao).



