document.getElementById('login-submit').addEventListener('click', function () {
  // get user Email 
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;


  //    get user password 
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  // check email and password 
  if (userEmail == 'johnDoe@example.com' && userPassword == '1234') {
    window.location.href = 'banking.html'
  } else {
    alert('Invalid email and password. The login credentials are given below. \n \n Email : johnDoe@example.com \n password : 1234 ');
  }

})


