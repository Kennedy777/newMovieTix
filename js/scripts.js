//BUSINESS LOGIC
var movie1 = {
   title: "Star Trek 77",
   times: [{time: "8am", matinee: true}, {time: "1:30pm", matinee: true}, {time: "7:15pm", matinee: false}],
   rating: "PG"
 };

var movie2 = {
   title: "Avengers Avenging",
   times: [{time: "9am", matinee: true}, {time: "12:30pm", matinee: true}, {time: "6:15pm", matinee: false}],
   rating: "PG-13"

 };

 var movie3 = {
   title: "Rochelle, Rochelle",
   times:[{time: "11am", matinee: true}, {time: "3:30pm", matinee: true}, {time: "9:15pm", matinee: false}],
   rating: "R"
 };

 var movie4 = {
   title: "The Human Fund",
   times:[{time: "10:13am", matinee: true}, {time: "3:30pm", matinee: true}, {time: "7:30pm", matinee: false}],
   rating: "PG"
 };

var movieArr = [movie1, movie2, movie3, movie4];
var movieChoice;
var finalSelection = {};

//UI LOGIC
function populateMovies(array) {
  var appendHTML = "";
  for(var i = 0; i < array.length; i++) {
    appendHTML += '<li id="movie' + (i+1) + '">' + array[i].title + '</li>';
  }
  $('#nowPlaying').append(appendHTML);
}

function movieTimes (title){
    $('[id$=Buy]').hide();
    var appendHTML = '<p>Please select a time for ' + title + ':</p>';
    var timesArray = [];
    for(var i = 0; i < movieArr.length; i++) {
      if(movieArr[i].title === title){
        movieChoice= movieArr[i];
        finalSelection.title = movieChoice.title;
        movieArr[i].times.forEach(function(time){
          timesArray.push(time.time);
        });
      }
    }
    for(var i=0; i< timesArray.length; i++) {
      appendHTML += '<li id="time' + (i+1)+'"><button>'+timesArray[i]+'</button>';
    }
    $('#showtimes').empty();
    $('#showtimes').append(appendHTML);
}

function showTicketType(time) {
  finalSelection.time = time;
  var matinee;
  for(var i = 0; i < movieChoice.times.length; i++){
    if(movieChoice.times[i].time === time) {
      matinee = movieChoice.times[i].matinee;
    }
  }
    if (matinee===true){
    $("#eveningBuy").hide();
    $("#matineeBuy").show();

    }
    else {
    $("#matineeBuy").hide();
    $("#eveningBuy").show();
    }
}
function attachListeners() {
  $('#showtimes').on('click', '[id^=time]', function(){
    showTicketType($(this).text());
  });
};

function calcMatineePrice(qty) {
  finalSelection.total = '$' + (qty *= 5) + '.00';
}

function calcEvePrice(adult, child, senior){
  finalSelection.total = '$' + ((adult *= 12) + (child *=7) + (senior *=7)) + '.00';
}

function confirmMessage (){
$('#selectTix').hide();
$('#finalTitle').text(finalSelection.title);
$('#finalShowtime').text(finalSelection.time);
$('#finalAmt').text(finalSelection.total);
$('#confirm').show();
}

//DOCUMENT READY LOGIC

$(function(){
  attachListeners();
  populateMovies(movieArr);

  $('[id^=movie]').click(function(){
    movieTimes($(this).text());
  });

  $('#matineeBuy button').click(function(){
    calcMatineePrice($('#matineeSelect').val());
    confirmMessage();
  });

  $('#eveningBuy button').click(function(){
    calcEvePrice($('#adultSelect').val(), $('#childSelect').val(), $('#seniorSelect').val());
    confirmMessage();

  });

});
