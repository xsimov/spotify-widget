(function(){
	
document.getElementsByClassName('btn-play')[0].addEventListener('click', changePlayButton);
var progress = document.getElementsByTagName('progress')[0];

	function changePlayButton(event){
		$event = $(event.target);
		if (event.target.classList.contains('playing')){
			$event.addClass('disabled');
			$event.removeClass('playing');
			audio.pause();
		}
		else {    //other way round
			$event.addClass('playing');
			$event.removeClass('disabled)');
			audio.play();
		};
	};

	audio.addEventListener("timeupdate", function (){
		progress.value = audio.currentTime / audio.duration * 100;
		console.log(progress.value);
 	  	});

	// document.getElementsByTagName('form')[0].addEventListener('onsubmit', formatQ);

	function formatQ(event){
		event.preventDefault();
		var name = document.forms['form']['name'].value;
		var q = name.replace(" ", "%20");
		q += "&type=track";
		alert(q);
		// event.returnValue = false;
	};

})(window);