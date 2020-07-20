# A classe é como se fosse um molde para o objeto
# Classes não utilizam snipCase

class Carro 

end

novo_carro = Carro.new
puts "Variável carro: #{novo_carro}"

a = "RUBY PARA INICIANTES"
b = a

b.downcase!
puts a  #O b aponta para o mesmo endereço na memória da variável b, portanto modificá-lo irá modifica o a

#Para copiar um valor de uma variável precisamos utilizar o método .clone

c = a.clone

c.upcase!

#Desde modo o conteúdo é mesmo, mas o endereço das variáveis na memória é diferente

puts c
puts a

