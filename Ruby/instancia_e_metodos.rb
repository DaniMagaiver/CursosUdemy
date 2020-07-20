class  Carro
    def velocidade_maxima
        250
    end

    def adiciona_marca(marca)
        @marca = marca # O @ define a variável a partir do momento em que o método é adicionado e também realiza o retorno da mesma quando usado sozinho
    end
    def marca
        @marca
    end
end

carro = Carro.new
carro.adiciona_marca("Ford")
puts carro.marca