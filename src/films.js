// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( x => x.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter( x => x.director == director );
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = getMoviesFromDirector(array, director).map( x => x.score);
  let result = parseFloat( (scores.reduce( (previous, current) => previous + current )/scores.length).toFixed(2) );
  return result;
}
function moviesAverage(array){
  let scores = array.map( x => x.score).filter( x => x);
  let result = parseFloat( (scores.reduce( (previous, current) => previous + current )/scores.length).toFixed(2) );
  return result; 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map( x => x.title).sort().slice(0,20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear([...array]) {
  let compare_year_title = (a, b) => {
    if(a.year < b.year)
      return -1;
    if(a.year > b.year)
      return 1;
    if(a.title < b.title)
      return -1;
    if(a.title > b.title)
      return 1;
    return 0;
  }
  let result = array.sort( compare_year_title);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let movies_category = array.filter( x => x.genre.includes(category) );
  let avg_scores = moviesAverage(movies_category);
  return avg_scores;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map( x => {
    let obj = Object.assign({}, x);
    let duration = obj.duration.split(' ');
    let hours = parseInt(duration[0].replace('h','') * 60);
    if(duration[1]){
       let min = parseInt(duration[1].replace('min',''));
       obj.duration = hours + min;
    }else{
      obj.duration = hours;
    }
    return obj;
  });
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear([...array], year) {
  let compare_score = (a, b) => {
    if(a.score < b.score)
      return 1;
    if(a.score > b.score)
      return -1;
    return 0;
  }
  return array.filter( x => x.year == year).sort( compare_score ).slice(0, 1)
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
