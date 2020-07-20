#Métodos de classe são métodos que são acionados a partir da própria classe, de outra forma os métodos só podem ser acionados a partir de uma instância.
class Automovel
    def self.tipo_cambio #este self. permite criar métodos de classe
        puts "Manual"
    end

    def acelera
        puts "Acelerando automóvel..."
    end
end

class Carro < Automovel
    def acelera
        puts "Verificando equipamentos..."
        super
    end
end

#Automovel.tipo_cambio permite acessar diretamento este método
#A classe Carro possui acesso a este método, sem precisar ser instanciada
