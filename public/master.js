//Make makeconnection
var socket = io.connect('http://localhost:4000')


  $("button").on("click", function(){
	  updateSound($(this).val());

  });


  function updateSound (frequencia){

	  socket.emit('channel', { //emitting a message called "channel" with 2 parameters"
		  frequency: frequencia, //parameter 1
		  type: 'sine' //parameter 2
	  });
  }
