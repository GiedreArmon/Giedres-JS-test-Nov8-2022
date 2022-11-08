/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let count = 0;
let btnelement = document.getElementById("btn__element");
let btnstate = document.getElementById("btn__state");

btnelement.onclick = function () {
    count++;
    btnstate.innerHTML = count;
}