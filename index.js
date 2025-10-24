console.log('Happy developing ✨')

let nom= "Moix"
let punts= 10;
let rol="mago"
console.log("Punts del peix")
console.log(nom)
console.log(punts)
console.log(nom +': Punts: '+ punts)

punts = punts-1
punts = punts+10
punts = punts*2
console.log(punts)

// let nivell=1
// if(nivell>2) {
//     console.log("Pots pescar al llac blau")
// }    else{
//         console.log("No poots pescar al llac blau")
// }

function comprovarNivell(){
    mostraNivell()
    if(nivell>5) {
        console.log("Pots pescar al llac blau")
    }    else{
        console.log("No pots pescar al llac blau")
    }
}
function mostraNivell(){
    console.log("El nivell és " + nivell)
}
let nivell=5
comprovarNivell()
// mostraNivell()
nivell=8
comprovarNivell()
// mostraNivell()
nivell++
comprovarNivell()
// mostraNivell()

if(punts>30){
    console.log("El peix a pujat a nivell 2")
} else if (punts>0){
    console.log("El peix està a nivell a 1")
} else {
    console.log("Has perdut")
}

const peixosBatallaGuanyada=500
let peixos=100
partidaGuanyada()

function partidaGuanyada(){
    peixos = peixos + peixosBatallaGuanyada;
    console.log("Peixos actuals desprès de la partida: " + peixos)
}




// nivell++ =nivell+1

