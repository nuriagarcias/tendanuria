let nombreProductes = 0

function Comprar(nom,preu){
    document.getElementById('cistella').innerText += nom + " - " + preu +"€\n"
    nombreProductes++
    document.getElementById('comptadorProductes').innerText = nombreProductes + " articles"
}

let cost=0

function Sumar(preu){
    cost = cost + preu;
    document.getElementById("CampPreu").innerText="Preu de la compra: " + Number(cost).toFixed(2);     // 1.34
    ;
}