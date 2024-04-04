// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
    name: "Jessica",
    lastname: "Peixoto",
    age: 33, 
} 



// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.name} ${this.lastname}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000; 

  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  let cachorro = {
    raca: "Labrador",
    cor: "Preto", 
    idade: 10, 
    latir(pessoa) {
        if (pessoa === "Homem") {
            return "Latir";
        } else {
            return "Nada";
        }
    }
  }



// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaVencedores = [1959, 1962, 1970, 1994, 2002]; 

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < copaVencedores.length; i++) {
    console.log(`O Brasil ganhou a copa de ${copaVencedores[i]}`)
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];