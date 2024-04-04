function areaQuadrada(lado) {
    return lado * lado;
}

console.log(areaQuadrada(2));

function pi() {
    return 3.14;
}

let total = 5 * pi();

console.log(pi);

function imc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
};

console.log(imc(90, 1.65));


function corFav (cor) {
    if(cor === "Azul") {
        return "Eu amo o mar";
    } else if (cor === "rosa") {
        return "Eu amo o filme da barbie";
    } else {
        return "Eu não gosto de cores"; 
    }
    
}

console.log(corFav("rosa"));


let petName = "Jessie";
let breed = "Labrador";

console(petName, breed);