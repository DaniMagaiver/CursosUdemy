# APRENDIZAGEM DE MÁQUINA

## Analisar consistência dos dados:
[ ] Verificar estatísticas dos dados
[ ] Verificar dados incompatíveis, ex.: idade negativa.
[ ] Preencher dados nulos ou inconsistentes com média ou remover coluna

## Preparação dos dados:
[ ] Divisão entre atributos previsores (eixo x) e classe meta (eixo y)
[ ] Padronizar atributos previsores para estarem na mesma escala
[ ] Converter dados categóricos dos atributos previsores para numéricos com label_encoder
[ ] Padronizar categoricos convertidos utilizando o one hot encoder
[ ] Dividir base de dados de teste e treinamento
[ ] Gerar arquivo de dados pre-processados

## Processamento
[ ] Treinar usando base de treinamento
[ ] Avaliar usando base de teste
[ ] Conferir métricas de resultados

# Algoritmo Naive Bayes
Trabalha com uma tabela de probabilidades que relaciona atributos previsores e classe meta. 
É utilizado para classificação, principalmente em filtros de spams, classificador
de emoções, e agrupador de documentos.
Utiliza a correção laplaciana para quando as probabilidades das classes meta na tabela
de probabilidades resultarem em zero, através da adição de registros a mesma.
No Naive Bayes utilizamos probabilidades a priori para calcular probabilidades a posteriori.
## Vantagens
- Rápido
- Simplicidade de interpretação
- Trabalha com altas dimensões
- Boas previsões em bases pequenas (a partir de 200 registros)
## Desvantagens
- Assume que os atributos não possuem correlação, são independentes

# Árvores de decisão
Utiliza uma árvore onde a raiz é representada por um atributo principal, os nós são representados pelos demais atributos previsores e as folhas são representadas pela classe meta.
O treinamento na árvore de decisão é justamente ordenar a importância dos atributos previsores.
Para descobrir quais os melhores atributos para se colocar no topo da árvore
são utilizados os cálculos de entropia e ganho de informação de forma recursiva, os atributos previsores são ordenados de acordo com o ganho de informação.
Um detalhe interessante é que quanto menor o valor de entropia de um atributo previsor, mais fácil de classificar um dado a partir dele.
Quando um atributo possui um ganho de informação muito pequeno ele pode ser 
excluído da árvore.
- split -> divisão dos dados que representam uma determinada classe, o algoritmo da árvore irá buscar o melhor conjunto de divisores
- bias -> Erros por classificação errada
- variância -> Erros por sensibilidade pequena a mudanças na base de treinamento
- overfitting -> Quando o algoritmo se adapta demais aos registros de treinamento, ocorre quando a árvore de decisão possui ramos muito específicos dos dados de treinamento.
- poda -> remoção de atributos descessários da árvore de decisão.
## Vantagens
- Fácil interpretação
- Não precisa de normalização ou padronização
- Rápido para classificar novos registros
## Desvantagens
- Geração de árvores muito complexas (overfitting)
- Pequenas mudanças nos dados podem alterar a árvore
- Problam NP-completo para construir a árvore

