(function(){
"use strict";
	
document.getElementsByClassName('btn-play')[0].addEventListener('click', changePlayButton);
window.progress = document.getElementsByTagName('progress')[0];

function changePlayButton(event){
	if (event.target.className === 'btn-play disabled') {
	        event.target.className = 'btn-play playing';
	        audio.play();
	    }
	    else {
	        event.target.className = 'btn-play disabled';
	        audio.pause();
	    };
	};

audio.addEventListener("timeupdate", function (){
	progress.value = audio.currentTime / audio.duration * 100;
	console.log(progress.value);
	  	});

document.getElementsByTagName('form')[0].addEventListener('submit', formatQ);

function formatQ(event){
	event.preventDefault();
	var name = document.forms['form']['name'].value;
	if (!name){
		document.forms['form']['name'].value = "Insert something in here!!";
		return;
	}
	var q = name.replace(" ", "%20");
	q = "https://api.spotify.com/v1/search?q=" + q + "&type=track&limit=10";
	getTrack(q,1);
	};

})(window);