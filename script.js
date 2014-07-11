(function(){
'use strict';


var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ');

    xhr.setRequestHeader('Accept', 'application/json');

    var response;

    xhr.onload = function () {
      if (this.status === 200) { // the result is OK
       response = JSON.parse(xhr.response);
       console.log(response);
       interact(response);
      }
    };

    xhr.send();


    function interact (response){
    	var title = document.getElementsByClassName('title')[0];
    	var author = document.getElementsByClassName('author')[0];
    	var cover = document.getElementsByClassName('cover')[0].getElementsByTagName('img')[0];
    	var audio = document.getElementById('audio');
    	// var artist = document.getElementsByClassName('artist')[0];
    	// var song = document.getElementsByClassName('song')[0];

    	title.innerHTML = response.album.name;
    	author.innerHTML = response.artists[0].name;  //!!!!!
    	cover.src = response.album.images[0].url;
    	audio.src = response.preview_url;

 	    }


})(window);