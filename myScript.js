$(document).ready(function() {
	$('#check-answer').on('click', function() {
    const $selectedRadio = $('input[name="q1"]:checked');
    if ($selectedRadio.length > 0) {
    if ($selectedRadio.parent('label').hasClass('correct')) {
		$('#result1').text('Correct!');
	    $('#result1').css({"margin-left": "45%" , "color": "SpringGreen"});
        alert("Correct!");
    } 
	else {
        $('#result1').text('Good Try');
		$('#result1').css({"margin-left": "45%" , "color": "Crimson"});
        alert("Incorrect:/");
         }
        }
     });
  
	$('#check-answer2').on('click', function() {
    const $selectedRadio = $('input[name="q2"]:checked');
    if ($selectedRadio.length > 0) {
    if ($selectedRadio.parent('label').hasClass('correct')) {
		$('#result2').text('Correct!');
	    $('#result2').css({"margin-left": "45%" , "color": "SpringGreen"});
        alert("Correct!");
    } 
	else {
		$('#result2').text('Good Try');
	    $('#result2').css({"margin-left": "45%" , "color": "Crimson"});
        alert("Incorrect:/");
         }
        }
	 });
  
	$('#check-answer3').on('click', function() {
    const $selectedRadio = $('input[name="q3"]:checked');
    if ($selectedRadio.length > 0) {
    if ($selectedRadio.parent('label').hasClass('correct')) {
		$('#result3').text('Correct!');
		$('#result3').css({"margin-left": "45%" , "color": "SpringGreen"});
        alert("Correct!");
    }
	else {
		$('#result3').text('Good Try');
		$('#result3').css({"margin-left": "45%" , "color": "Crimson"});
        alert("Incorrect:/");
		 }
        }
     });
  
	$('#check-answer4').on('click', function() {
    const $selectedRadio = $('input[name="q4"]:checked');
    if ($selectedRadio.length > 0) {
    if ($selectedRadio.parent('label').hasClass('correct')) {
		$('#result4').text('Correct!');
		$('#result4').css({"margin-left": "45%" , "color": "SpringGreen"});
        alert("Correct!");
    }
	else {
		$('#result4').text('Good Try');
		$('#result4').css({"margin-left": "45%" , "color": "Crimson"});
        alert("Incorrect:/");
         }
        }
     });
});
  
  
  
  
  
  
  
