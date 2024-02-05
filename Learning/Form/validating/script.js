 // JavaScript for form validation
 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form data
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username === "") {
      alert("Please enter a username.");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Form is valid, proceed with form submission or further processing
      alert("Form submitted successfully!\nUsername: " + username + "\nEmail: " + email);
    }
  });

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }