//Make makeconnection
var socket = io.connect('http://localhost:4000')

  $( function() {
    $( "#slider" ).slider();
  });
  
  $("#slider").on("change", function(){
	  updateSound($("#slider").val());

  });
    
  $("button").on("click", function(){
	  updateSound($(this).val());

  });
  
  
  function updateSound (frequencia){
	  
	  socket.emit('channel', { //emitting a message with 2 parameters called "channel"
		  frequency: frequencia, //parameter 1
		  type: 'sine' //parameter 2
	  });  
  }
