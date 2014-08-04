(function(){
'use strict';

  var response;
  var duration;
	var title = document.getElementsByClassName('title')[0];
	var author = document.getElementsByClassName('author')[0];
	var cover = document.getElementsByClassName('cover')[0].getElementsByTagName('img')[0];
	var audio = document.getElementById('audio');

window.getTrack = function(queryURL,listFlag){
	var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL);

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
      if (this.status === 200) {
        response = JSON.parse(xhr.response);
        if (listFlag === 0) interact(response);
        else if(response.tracks.items.length > 0) displayTable(response);
      }
    };

    xhr.send();

  };


function interact (response){
	title.innerHTML = response.name;
	author.innerHTML = response.artists[0].name;  //!!!!!
	cover.src = response.album.images[0].url;
	audio.src = response.preview_url;
	duration = response.duration_ms / 1000;
};


function displayTable(response){
  var elem = document.getElementsByTagName('table')[0];
  if (elem){
    elem.parentNode.removeChild(elem);
  }
	var table = document.createElement('table');
	var row;
	var cell1;
	var cell2;
	var cell3;
	var img;
	var link;

	for (var i = 0; i < response.tracks.items.length; i++) {
		row = table.insertRow(i);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		link = document.createElement('a');
		link.href = response.tracks.items[i].href;
		link.className = "hidden";
		img = document.createElement('img');
		img.src = response.tracks.items[i].album.images[2].url; //urlIMG
		cell1.appendChild(img);
		cell1.appendChild(link);
		cell2.innerHTML = response.tracks.items[i].name;
		cell3.innerHTML = response.tracks.items[i].artists[0].name;  //ALL THE ARTISTS!
		};

	document.getElementsByClassName('table')[0].appendChild(table);
	document.getElementsByClassName('table')[0].className = "table";
	document.getElementsByTagName('tbody')[0].addEventListener('click', function(){
	var url = event.target.parentNode.firstChild.lastChild.href;
	getTrack(url,0);
	});
};


})(window);