(function(){
	
	document.getElementsByClassName('btn-play')[0].addEventListener('click', changePlayButton);

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

	//funcion para evaluar cuanto audio lleva.

})(window);