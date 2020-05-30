
//Make makeconnection
	var socket = io.connect('http://localhost:4000')
	var socket = io.connect('192.168.1.128:4000')

	var stop = 0;
    output = document.getElementById('c');

	
	document.querySelector('button').addEventListener('click', function() {
	  stop = 0;

	  // create Oscillator node
	});
	
	document.querySelector('#stop').addEventListener('click', function() {
		stop = 1;
	});


	// Listen for events
	socket.on('channel', function(data, oscillator, audioCtx){
		console.log(data);
				
		var audioCtx = new (window.webkitAudioContext || window.AudioContext)();
		var oscillator = audioCtx.createOscillator();

		oscillator.type = data.type;
		oscillator.frequency.setValueAtTime(data.frequency, audioCtx.currentTime); // value in hertz
		oscillator.connect(audioCtx.destination);
		oscillator.start();

		audioCtx.resume().then(() => {
			console.log('Playback resumed successfully');
		});
		
		output.innerHTML += '<p><strong>' + data.type + ': </strong>' + data.frequency + '</p>';

	});

