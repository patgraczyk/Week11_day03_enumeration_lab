const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  return this.films.map((film) => film.title);
  // return film[title];
}

Cinema.prototype.findFilmByTitle = function(title){
  const result = this.films.filter((film) => {
    if (film.title === title){
      return true
    } else {
      return false
    }
  })
  return result;
}

Cinema.prototype.findByGenre = function(genre){
  const result = this.films.filter((film) => {
    if (film.genre === genre){
      return true
    } else {
      return false
    }
  })
  return result;
}

Cinema.prototype.findByYear = function(year){
  const result = this.films.filter((film) => {
    if (film.year === year){
      return true
    } else {
      return false
    }
  })
  return result;
}


Cinema.prototype.calculateRunningTime = function(){
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return result;
}


module.exports = Cinema;
