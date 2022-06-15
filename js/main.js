document.querySelector("button").onclick = function(){
    let nazwa1 = document.getElementById("name");
    let imie = document.querySelector("#imie");


    let nazwa2 = document.getElementById("surname");
    let nazwisko = document.querySelector("#nazwisko");

    let nazwa3 = document.getElementById("phone");
    let telefon = document.querySelector("#telefon");

    nazwa1.textContent = imie.value;
    nazwa2.textContent = nazwisko.value;
    nazwa3.textContent = telefon.value;

    console.log(imie.value);
    console.log(nazwisko.value);
    console.log(telefon.value);
}
