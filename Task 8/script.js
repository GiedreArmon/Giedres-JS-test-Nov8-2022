/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function calculate(n1, n2, operator) {
    switch(operator){
        case 'sum':
            return n1 + n2;
        case 'subtraction':
            return n1 - n2;
        case 'multiplication':
            return n1 * n2;
        case 'division':
            return n1 / n2;
    }
  }


console.log(calculate(0.56, 2, 'sum'));
console.log(calculate(10000, 4587, 'subtraction'));
console.log(calculate(5, 8, 'multiplication'));
console.log(calculate(400, 55, 'division'));
