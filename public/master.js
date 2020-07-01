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
    switch (code){
        case (97):
            updateSound(261.63, $("#forma").val());
            break;
        case (119):
            updateSound(277.18, $("#forma").val());
            break;
        case (115):
            updateSound(293.66, $("#forma").val());
            break;
        case (101):
            updateSound(311.13, $("#forma").val());
            break;
        case (100):
            updateSound(329.63, $("#forma").val());
            break;
        case (102):
            updateSound(349.23, $("#forma").val());
            break;
        case (116):
            updateSound(369.99, $("#forma").val());
            break;
        case (103):
            updateSound(392.00, $("#forma").val());
            break;
        case (121):
            updateSound(415.30, $("#forma").val());
            break;
        case (104):
            updateSound(440.00, $("#forma").val());
            break;
        case (117):
            updateSound(466.16, $("#forma").val());
            break;
        case (106):
            updateSound(493.88, $("#forma").val());
            break;
    }
});
$("body").on("keyup", function(e){
updateSound(0, $("#forma").val());
});
