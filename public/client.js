
//Make makeconnection
	var socket = io.connect('http://localhost:4000')

	var stop = 0;
    var output = document.getElementById('c');

	var audioCtx = new (window.webkitAudioContext || window.AudioContext)();
	var oscillator = audioCtx.createOscillator();


	// Listen for events
	socket.on('channel', function(data){
		console.log(data);

		updateAudiocontext (data);


		output.innerHTML += '<p><strong>' + data.type + ': </strong>' + data.frequency + '</p>';

	});
	
	function updateAudiocontext (data, oscillator, audioCtx){
		var oscillator = window.oscillator;
		var audioCtx = window.audioCtx;

		oscillator.type = data.type;
		oscillator.frequency.setValueAtTime(data.frequency, audioCtx.currentTime); // value in hertz
		oscillator.connect(audioCtx.destination);
		oscillator.start();

	}

	document.querySelector('button').addEventListener('click', function() {
	  stop = 0;
	});

	document.querySelector('#stop').addEventListener('click', function() {
		stop = 1;
	});
