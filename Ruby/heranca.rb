#Ruby não permite herança múltipla, uma classe não pode herdar comportamentos de várias classes
#As classes em Ruby herdam seus comportamentos de object, que herda o comportamento de basicObjetic, que é uma classe limpa, sem métodos.
#O método clone, por exemplo é herdado da classe object

class Automovel
    def acelera
        puts "Acelerando automóvel..."
    end
end

class Carro < Automovel #defie que Carro é filho de Automóvel
    def acelera
        puts "Verificando equipamentos..."
        super #Isso chama o método acelera da classe pai
    end
end