package fundamentos;

public class Usuario {

    public String nome;
    public String email;

    public Usuario(String nome, String email){
        this.nome = nome;
        this.email = email;
    }
    
    @Override
    public String toString() {
        return "Meu nome é " + this.nome;
    }

    @Override
    public int hashCode() {
        return this.nome.length();
    }
    
    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Usuario) {
            Usuario usuario = (Usuario) obj;
            boolean isNome = usuario.nome.equals(this.nome);
            boolean isEmail = usuario.email.equals(this.email);
            return isNome && isEmail;
        }else{
            return false;
        }
    }
}
