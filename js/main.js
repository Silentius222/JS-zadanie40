document.querySelector("button").onclick = function(){
    let nazwa1 = document.getElementById("name");
    console.log(nazwa1.value);
    let imie = document.querySelector("#imie");


    let nazwa2 = document.getElementById("surname");
    console.log(nazwa2.value);
    let nazwisko = document.querySelector("#nazwisko");

    let nazwa3 = document.getElementById("phone");
    console.log(nazwa3.value);
    let telefon = document.querySelector("#telefon");

    imie.textContent = telefon;
    nazwa2.textContent = nazwisko;
    nazwa3.textContent = telefon;

    console.log(imie.value);
    console.log(nazwisko.value);
    console.log(telefon.value);
}