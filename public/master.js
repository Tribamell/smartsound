//Make makeconnection
var socket = io.connect('http://localhost:4000');
var forma = "sine";


    $(".key").on("click", function(){
        updateSound($(this).data('value'), $("#forma").val());
    });

  $("button").on("click", function(){
    updateSound($(this).val(), $("#forma").val());
  });

  function updateSound (frequencia, forma){
      console.log(frequencia, forma);

	  socket.emit('channel', { //emitting a message called "channel" with 2 parameters"
		  frequency: frequencia, //parameter 1
		  type: forma, //parameter 2
	  });
  }

$("body").on("keypress", function(e){



    var code = e.keyCode || e.which;
    alert(code);

    switch (code){
        case (97):
            updateSound(261.63, $("#forma").val());
            break;
        case (114):
            updateSound(261.63, $("#forma").val());
            break;
    }


});
