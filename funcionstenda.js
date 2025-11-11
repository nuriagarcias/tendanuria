let nombreProductes = 0

function Comprar(nom, preu, imatge){
    //Llegim el que s'ha desat al LocalStorage
    // nombreProductes = localStorage.getItem("totalProductes");
    document.getElementById('cistella').innerHTML += "<div><img src=\""+imatge+"\" width=\"90\" height=\"90\">" + nom  + "-" + preu + "€</div>"
    nombreProductes++
    if(nombreProductes > 1){
        document.getElementById('comptadorProductes').innerText = "Cistella amb " + nombreProductes + " articles"
    }
    else{
        document.getElementById('comptadorProductes').innerText = "Cistella amb " + nombreProductes + " article"
    }

    //Escrivim el que volem desar al LocalStorage
    // localStorage.setItem('totalProductes', nombreProductes)
}

let cost=0

function Sumar(preu){
    cost = cost + preu;
    document.getElementById("CampPreu").innerText="Preu de la compra: " + Number(cost).toFixed(2) + "€";     // 1.34
}

// function carregar(){
//     //Llegim el contingut del LocalStorage
//     nombreProductes = localStorage.getItem("totalProductes");
//     document.getElementById('comptadorProductes').innerText = "Cistella amb" + nombreProductes + " articles"
//     if(nombreProductes > 1){
//         document.getElementById('comptadorProductes').innerText = "Cistella amb " + nombreProductes + " articles"
//     }
//     else{
//         document.getElementById('comptadorProductes').innerText = "Cistella amb " + nombreProductes + " article"
//     }
//
// //Aquesta acció s'indica quan es carrega la pàgina
// (()=> {
//     //1.Esperam a que s'hagi carregat tot per modificar el contingut
//     document.addEventListener('DOMContentLoaded', () => {
//         //2. Funció que es crida una vegada
//         carregar();
//     });
// })();