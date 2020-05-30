//Make makeconnection
var socket = io.connect('http://localhost:4000');
var forma = "sine";



  $("button").on("click", function(){
    updateSound($(this).val(), $("#forma").val());
  });

  function updateSound (frequencia, forma){

	  socket.emit('channel', { //emitting a message called "channel" with 2 parameters"
		  frequency: frequencia, //parameter 1
		  type: forma, //parameter 2
	  });
  }
