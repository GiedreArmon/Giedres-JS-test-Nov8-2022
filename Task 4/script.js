/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('cars.json')
    .then(function(response) {
        return response.json();
     })
    .then(function(cars) {
        let placeholder = document.querySelector("#carslist");
        let out = "";
        for(let car of cars){
            out += `
              <tr>
              <td>${car.brand}</td>
              <td>${car.models}</td>
              </tr>
            `;
        }

    placeholder.innerHTML = out;

    })

