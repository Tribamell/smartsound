//Make makeconnection
var socket = io.connect('http://localhost:4000')

  $( function() {
    $( "#slider" ).slider();
  });
  
  $("#slider").on("change", function(){
	  updateSound();

  });
  
  
  function updateSound (){
	  
	  socket.emit('channel', { //emitting a message with 2 parameters called "channel"
		  frequency: $("#slider").val(), //parameter 1
		  type: 'sine' //parameter 2
	  });  
  }
