class  Carro

    attr_accessor :marca, :modelo #Permite definir um atributo de classe, repare que : deve ficar colado ao atributo. : define um objeto do tipo simbol.
    attr_reader :ano #disponibiliza apenas o atributo para leitura
    attr_writer :situacao #disponibiliza apenas o atributo para escrita

    def velocidade_maxima
        250
    end

    def descricao
        "#{Marca: #{@marca} e Modelo: #{@modelo}" #define umm atributo virtual
    end
end

carro = Carro.new
carro.marca = "Ford"
carro.modelo = "Focus"
puts "Marca: #{carro.marca}  e modelo: #{carro.modelo}"
