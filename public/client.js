	//Make makeconnection to:
	var socket = io.connect('http://localhost:4000');
	var socket = io.connect('http://192.168.1.132:4000');

//enter ip from textbox
function getIP (){
	var ipaddress = document.getElementById("connectto").value;
};

//WHEN CLICK OK, EXECUTE FUNCTION getIP



//stop button
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

//stop button listener
	document.querySelector('button').addEventListener('click', function() {
	  stop = 0;
	});
	document.querySelector('#stop').addEventListener('click', function() {
		stop = 1;
		window.oscillator.stop();
	});
