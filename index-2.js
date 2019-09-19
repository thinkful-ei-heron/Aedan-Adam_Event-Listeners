function handleSubmitClick() {
    $('#number-chooser').submit(event => {
      event.preventDefault();
      const userChoice = $(event.currentTarget).find('#number-choice').val();
     
      for (let i = 1; i <= userChoice; i++) {
        $('.js-results').empty();
        let fizzBuzzElement = '<div class= "fizz-buzz-item';
        if (i % 15 === 0) {
          fizzBuzzElement += ' fizzbuzz"><span>fizzbuzz</span></div>';
        }
        else if (i % 5 === 0) {
          fizzBuzzElement += ' buzz"><span>buzz</span></div>';
        }
        else if (i % 3 === 0) {
          fizzBuzzElement += ' fizz"><span>fizz</span></div>';
        }
        else {
          fizzBuzzElement += `"><span>${i}`;
        }
        fizzBuzzElement += ' </span></div>';
        $('.js-results').append(fizzBuzzElement);
      }
    })
  }
 $(handleSubmitClick());
 
 