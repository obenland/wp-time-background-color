(function() {
	function pad(hours){
		return (hours < 10) ? "0" + hours : hours;
	}

	function transitionBackground(){
		var d = new Date(), hours = pad( d.getHours() ), mins = pad( d.getMinutes() ), secs = pad( d.getSeconds() );

		document.body.style.background = "#" + hours.toString() + mins.toString() + secs.toString();

		setTimeout(function () {
			transitionBackground();
		}, 1000);
	}

	document.addEventListener( "DOMContentLoaded", function() {
		document.body.style['transition']         = 'all 0.8s';
		document.body.style['-webkit-transition'] = 'all 0.8s';
		transitionBackground();
	});
})();