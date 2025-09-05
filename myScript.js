$(document).ready(function() {
  $('#check-answer').on('click', function() {
    const $selectedRadio = $('input[name="q1"]:checked');
    if ($selectedRadio.length > 0) {
      if ($selectedRadio.parent('label').hasClass('correct')) {
        $('#result').text('Correct!');
          alert("Correct!");
      } else {
        $('#result').text('Good Try');
          alert("Incorrect:/");
      }
    
    }
  });
  
   $('#check-answer2').on('click', function() {
    const $selectedRadio = $('input[name="q2"]:checked');
    if ($selectedRadio.length > 0) {
      if ($selectedRadio.parent('label').hasClass('correct')) {
        $('#result').text('Correct!');
          alert("Correct!");
      } else {
        $('#result').text('Good Try');
          alert("Incorrect:/");
      }
    
    }
  });
  
    $('#check-answer3').on('click', function() {
    const $selectedRadio = $('input[name="q3"]:checked');
    if ($selectedRadio.length > 0) {
      if ($selectedRadio.parent('label').hasClass('correct')) {
        $('#result').text('Correct!');
          alert("Correct!");
      } else {
        $('#result').text('Good Try');
          alert("Incorrect:/");
      }
    
    }
  });
  
  
  
  
  
  
});
  
  
  
  
  
  
  
