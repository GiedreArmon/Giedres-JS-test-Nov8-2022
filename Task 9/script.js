/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

// sitas neveikia
/* function constructMovie(title, director, budget) {
  this.movieTitle = title;
  this.movieDirector = director;
  this.movieBudget = budget;
  this.movieExpensive = wasExpensive() {
    if (this.movieBudget > 100000000) {
      return this.movieTitle + " was expensive";
    } else {
      return this.movieTitle + " was not expensive";
    };
  };
};

let movie = new constructMovie("The Black Phone", "Scott Derrickson", 16000000);

console.log(movie) */


// sitas veikia
function constructMovie(title, director, budget) {
  this.movieTitle = title;
  this.movieDirector = director;
  this.movieBudget = budget;
  this.movieExpensive = wasExpensive(); 
};

function wasExpensive() {
  if (this.movieBudget > 100000000) {
  return "The movie was expensive.";
} else {
  return "The movie was not expensive.";
};
};

let movie = new constructMovie("The Black Phone", "Scott Derrickson", 16000000);

console.log(movie)


