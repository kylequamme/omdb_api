//Author: Kyle Quamme
//Created: 6/30/16
$(function(){

getMovieData('days+of+thunder')
getMovieData('ballad+of+ricky+bobby')
getMovieData('Toy+Story');

$()

  function getMovieData(name){

    $.ajax('http://www.omdbapi.com/?t=' + name)
      .success(function(data){
        $('body').append('<span><h1>' + data.Title + '</h1> ' +
        '<h2>Year: ' + data.Year + '</h2>' +
        '<img src="' + data.Poster + '" /></span>');
      }
      )
      .fail(function(){
        $('body').append('<span><h2>Failed to load data from API</h2>');
      }
      );
    }
});
