# O método initialize permite instaciar uma classe
# Caso tentemos enviar  menos argumentos para a classe irá resultar em um erro
class Carro

    attr_accessor :marca, : modelo

    def initialize(modelo, marca)
        @modelo = modelo
        @marca = marca
    end
end

carro = Carro.new "Model S", "Tesla"
puts carro