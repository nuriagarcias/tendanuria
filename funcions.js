let punts=100

function Carregar(){
    document.getElementById("campNom").innerText="Nom: Rin"
    document.getElementById("campPunts").innerText="Punts: " + punts
    document.getElementById("campAtac").innerText="Atac: 50"
    // alert("Dades carregades")
}

function Sumar(quantitat){
    punts = punts + quantitat;
    document.getElementById("campPunts").innerText="Punts: " + punts;
}

function Restar(quantitat){
    punts = punts - quantitat;
    document.getElementById("campPunts").innerText="Punts: " + punts;
}
function Sumar2(){
    let suma1=parseInt(document.getElementById("sumar1").value);
    let suma2=parseInt(document.getElementById("sumar2").value);
    let total1=suma1+suma2;
    document.getElementById("resultat").innerText= total1
}

function Restar2(){
    console.log("fds")
    let resta1 = parseInt(document.getElementById("sumar1").value);
    let resta2=parseInt(document.getElementById("sumar2").value);
    let total2=resta1-resta2;
    document.getElementById("resultat").innerText= total2
}

function Multip(){
    let mult1=parseInt(document.getElementById("sumar1").value);
    let mult2=parseInt(document.getElementById("sumar2").value);
    let total3=mult1*mult2;
    document.getElementById("resultat").innerText= total3
}

function Divid(){
    let divi1=parseInt(document.getElementById("sumar1").value);
    let divi2=parseInt(document.getElementById("sumar2").value);
    let total4=divi1/divi2;
    document.getElementById("resultat").innerText= total4;
}

function Major(){
    let num1=parseInt(document.getElementById("sumar1").value);
    let num2=parseInt(document.getElementById("sumar2").value);

    //num1: 100
    //num2: 20
    if(num1 > num2){
        document.getElementById("resultat").innerText="El més gran és: " + num1;
    }
    else if(num2 > num1){
        document.getElementById("resultat").innerText="El més gran és: " + num2;
    }
    else{
        document.getElementById("resultat").innerText="Són iguals"
    }

}

function Par(){
    let par1=parseInt(document.getElementById("sumar1").value);

    if(par1 % 2 === 0){
        document.getElementById("resultat").innerText="És par";
    }
    else{
        document.getElementById("resultat").innerText="No és par";
    }
}

function Afegir(){
    let text=document.getElementById("textLlista").innerText;
    let contingutActual=document.getElementById("Llista").value;

    document.getElementById("Llista").innerText += text + "\n";
}

function Amagar(){
    document.getElementById("llista").hidden= true
}

function Mostrar(){
    document.getElementById("llista").hidden= false
}