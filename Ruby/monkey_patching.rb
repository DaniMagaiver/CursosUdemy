#Monkey patching permite além de adicionar método sobrescrevê-los

class Carro
    def acelera
        puts "Acelerando"
    end
end

carro = Carro.new
carro.acelera

class Carro #MonkeyPath
    def acelera
        puts "Novo metodo"
    end
end

carro.acelera