	//Make makeconnection
	var socket = io.connect('http://localhost:4000');
	var socket = io.connect('100.72.164.3:4000')

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
		window.oscillator;
		window.audioCtx;

		window.oscillator.type = data.type;
		window.oscillator.frequency.setValueAtTime(data.frequency, window.audioCtx.currentTime); // value in hertz
		window.oscillator.connect(window.audioCtx.destination);
		window.oscillator.start();
	}

	document.querySelector('button').addEventListener('click', function() {
	  stop = 0;
	});

	document.querySelector('#stop').addEventListener('click', function() {
		stop = 1;
		window.oscillator.stop();
	});




	//volume
const gainNode = audioCtx.createGain();

const volumeControl = document.querySelector('[data-action="volume"]');
volumeControl.addEventListener('input', function() {
	gainNode.gain.value = this.value;
}, false);
