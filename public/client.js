	//Make connection to:
	var socket = io.connect('http://localhost:4000');
//	var socket = io.connect('http://192.168.1.131:4000');



//stop button
	var stop = 0;

  var output = document.getElementById('c');

//Create audio context and oscillator
	var audioCtx = new (window.webkitAudioContext || window.AudioContext)();
	var oscillator = audioCtx.createOscillator();

	// Listen for events
	socket.on('channel', function(data){
		console.log(data);
    //Send data to oscillator
		updateAudiocontext (data);
		output.innerHTML += data.type + data.frequency;
	});

	function updateAudiocontext (data, oscillator, audioCtx){
		window.oscillator;
		window.audioCtx;
		window.oscillator.type = data.type;
		window.oscillator.frequency.setValueAtTime(data.frequency, window.audioCtx.currentTime); // value in hertz
		window.oscillator.connect(window.audioCtx.destination);
		window.oscillator.start();
	}

//stop button listener
	document.querySelector('button').addEventListener('click', function() {
	  stop = 0;
	});
	document.querySelector('#stop').addEventListener('click', function() {
		stop = 1;
		window.oscillator.stop();
	});
