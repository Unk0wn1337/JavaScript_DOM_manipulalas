// fogjuk meg az azon nevezetu elemet
const azonELEM = document.getElementById("azon");
const azonELEM2 = document.querySelector("#azon");
console.log(azonELEM);
console.log(typeof azonELEM);

azonELEM.innerHTML = "Alakul a js!";

// kartya elemek elerese
const kartyaELEM = document.getElementsByClassName("kartya");
console.log(kartyaELEM); //tipusa HTML HTML Collection, lista
// a 2.kartyaba szeretnek beirni
kartyaELEM[1].innerHTML="beleirtunk a masodik kartyaba";
const kartyaELEM2 = document.querySelector(".kartya");
console.log(kartyaELEM2); // első html elemet kapjuk

const kartyaELEM3 = document.querySelectorAll(".kartya")[3];
const kartyaELEMHozzad = document.querySelectorAll(".kartya")[0];
console.log(kartyaELEM3); // nodelist - lista

// 3. divet akarom elérni, írjunk bele valamit
kartyaELEM3.innerHTML += "hozzáirunk valamit";

// fogjuk meg a button gombot
const buttonELEM = document.querySelectorAll("button")[0];
console.log(buttonELEM);

// kattintsunk rá a gombra
buttonELEM.addEventListener("click", gombraKattint)
// Csak egy referencia avagy hivatkozás, a függvényre
function gombraKattint(){
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML;
    //alert("Hurrá, modális");
}

// Ha rákattintunk a gombra akkor első kártyába kerüljön bele a 4.dik kártya tartalma is
