
 let movie1 = {
   title: "Star Trek 77",
   times: ["10am", "12:30pm", "6:15pm"],
   rating: "PG"
 };

 let movie2 = {
   title: "Avengers Avenging",
   times: ["10am", "12:30pm", "6:15pm"],
   rating: "PG-13"

 };

 let movie3 = {
   title: "Rochelle, Rochelle",
   times: ["10am", "12:30pm", "6:15pm"],
   rating: "R"
 };

 let movie4 = {
   title: "The Human Fund",
   times: ["10am", "12:30pm", "6:15pm"],
   rating: "PG"
 };

var movieArr = [movie1, movie2, movie3, movie4];



function populateMovies(array) {
  var appendHTML = "";
  for(var i = 0; i < array.length; i++) {
    appendHTML += '<li id="movie' + i + '">' + array[i].title + '</li>';
  }
  $('#nowPlaying').append(appendHTML);
}

$(function(){
  populateMovies(movieArr);


});
