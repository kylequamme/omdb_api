//Author: Kyle Quamme
//Created: 6/30/16
$(function(){
  var requestedMovie = '';

getMovieData('days+of+thunder')
getMovieData('ballad+of+ricky+bobby')
getMovieData('Toy+Story');

$('.btn').on('click', function(){
  requestedMovie = $('#searchBox').val().split(' ').join('+');
  getMovieData(requestedMovie);
});

  function getMovieData(name){
    $('main').empty();
    $.ajax('http://www.omdbapi.com/?t=' + name)
      .success(function(data){
        $('main').append('<span class="result"><h1>' + data.Title + '</h1> ' +
        '<h2>Year: ' + data.Year + '</h2>' +
        '<img src="' + data.Poster + '" /></span>');
      }
      )
      .fail(function(){
        $('main').append('<span><h2>Failed to load data from API</h2>');
      }
      );
    }
});
