class Elevador
    #Atributos
    attr_accessor :andarAtual, :quantidade_atual, :totalAndares, :capacidade #Definindo atributos

    #Métodos, recebe os parâmetros passados e define os valores dos atributos
    def inicializa
        puts("Digite a capacidade do elevador: ")
        @capacidade = gets.to_i
        puts("Digite o total de andares: ")
        @totalAndares = gets.to_i
        @andarAtual, @quantidade_atual = 0, 0 #inicializa o andar e a quantidade atuais
    end

    def entra
        if quantidade_atual < capacidade
            @quantidade_atual = quantidade_atual + 1
            puts "Entrou mais um, a quantidade atual agora é #{quantidade_atual}"
        else 
            puts "O elevador está cheio"
        end
    end

    def sai
        if quantidade_atual > 0
            @quantidade_atual = quantidade_atual - 1
            puts "Saiu mais uma pessoa, a quantidade atual agora é #{quantidade_atual}"
        end
    end

    def sobe
        if andarAtual < totalAndares
            @andarAtual = andarAtual + 1
            puts "Estamos agora no #{andarAtual}"
        else
            puts "Já estamos no último andar"
        end
    end

    def desce
        if andarAtual > 0
            @andarAtual = andarAtual - 1
            puts "Estamos agora no #{andarAtual}"
        else
            "O elevador se encontra no térreo"
        end
    end

    def get
        puts "Estamos no #{@andarAtual} com #{quantidade_atual}"
    end

end

elevador = Elevador.new #Cria um novo objeto do tipo Elevador
elevador.inicializa
comando = ""

while comando != "sair"
    puts "Digite um comando"
    comando = gets.chomp
    if comando == "sobe"
        elevador.sobe
    elsif comando == "desce"
        elevador.desce
    elsif comando == "entra"
        elevador.entra
    elsif comando == "sai"
        elevador.sai
    elsif comando == "get"
        elevador.get
    elsif comando != "sair"
        puts "Comando inválido"
    end
end
