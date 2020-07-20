class Automovel

    def self.tipo_cambio
        puts "Manual"
    end

    def acelera
        verifica_combustivel
        puts "Acelerando automóvel..."
    end

    private #Tudo que for escrito abaixo daqui será um método privado, somento o método poderá chamá-lo internamente
    def verifica_combustivel
        puts "verificando combustível"
    end
    #Um método privado pode ser compartilhado por classes filhas internamente

end