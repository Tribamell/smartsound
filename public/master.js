//Make makeconnection
var socket = io.connect('http://localhost:4000');
var forma = "sine";


    $(".key").on("mousedown", function(){
      updateSound($(this).data('value'), $("#forma").val());
    });

  $("button").on("mousedown", function(){
    updateSound($(this).val(), $("#forma").val());
  });

  $(".key").on("mouseup", function(){
    updateSound(0, $("#forma").val());
  });

  $("button").on("mouseup", function(){
    updateSound(0, $("#forma").val());
  });

  function updateSound (frequencia, forma){
      console.log(frequencia, forma);

	  socket.emit('channel', { //emitting a message called "channel" with 2 parameters"
		  frequency: frequencia, //parameter 1
		  type: forma, //parameter 2
	  });
  }

$("body").on("keypress", function(e){
  console.log(e);
  // alert(e.keyCode);
    var code = e.keyCode || e.which;
    switch (code){
        case (97): //Note C
            $(".pressed").removeClass('pressed');
            $("#C").addClass('pressed');
            updateSound(261.63, $("#forma").val());
            break;
        case (119): //Note C#
            $(".pressed").removeClass('pressed');
            $("#Csharp").addClass('pressed');
            updateSound(277.18, $("#forma").val());
            break;
        case (115): //Note D
            $(".pressed").removeClass('pressed');
            $("#D").addClass('pressed');
            updateSound(293.66, $("#forma").val());
            break;
        case (101)://Note D#
            $(".pressed").removeClass('pressed');
            $("#Dsharp").addClass('pressed');
            updateSound(311.13, $("#forma").val());
            break;
        case (100)://Note E
            $(".pressed").removeClass('pressed');
            $("#E").addClass('pressed');
            updateSound(329.63, $("#forma").val());
            break;
        case (102)://Note F
            $(".pressed").removeClass('pressed');
            $("#F").addClass('pressed');
            updateSound(349.23, $("#forma").val());
            break;
        case (116)://Note F#
            $(".pressed").removeClass('pressed');
            $("#Fsharp").addClass('pressed');
            updateSound(369.99, $("#forma").val());
            break;
        case (103)://Note G
            $(".pressed").removeClass('pressed');
              $("#G").addClass('pressed');
            updateSound(392.00, $("#forma").val());
            break;
        case (121)://Note G#
            $(".pressed").removeClass('pressed');
            $("#Gsharp").addClass('pressed');
            updateSound(415.30, $("#forma").val());
            break;
        case (104)://Note A
            $(".pressed").removeClass('pressed');
            $("#A").addClass('pressed');
            updateSound(440.00, $("#forma").val());
            break;
        case (117)://Note A#
            $(".pressed").removeClass('pressed');
            $("#Asharp").addClass('pressed');
            updateSound(466.16, $("#forma").val());
            break;
        case (106)://Note B
            $(".pressed").removeClass('pressed');
            $("#B").addClass('pressed');
            updateSound(493.88, $("#forma").val());
            break;
    }
});
$("body").on("keyup", function(e){
$(".pressed").removeClass('pressed');
updateSound(0, $("#forma").val());
});
