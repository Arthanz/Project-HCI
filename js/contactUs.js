document.querySelector('.form').addEventListener('submit', function(event) {
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('e-mail').value.trim();
    var country = document.getElementById('country').value;
    var message = document.getElementById('message').value.trim();
    var termsCheckbox = document.getElementById('terms-checkbox').checked;
  
    if (firstName.length < 5 || lastName.length < 5 || email === '' || country === 'Default' || message.length < 5 || !termsCheckbox) {
      event.preventDefault(); // Prevent form submission if validation fails
  
      // Show an error message or perform other actions
      alert('Please fill in all the required fields and agree to the terms and conditions. (All textbox has a minimum of 5 characters)');
    }
  });
  