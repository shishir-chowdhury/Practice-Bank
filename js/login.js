document.getElementById('login-submit').addEventListener('click', function () {
    /* Get email Id from input field */
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    /* Get password form passowrd inpur field */
    const passowrdField = document.getElementById('user-password');
    const userPassowrd = passowrdField.value;

    if (userEmail == 'shiishir@gmail.com' && userPassowrd == 'secret') {
        console.log('Valid User');
        window.location.href = 'banking.html';
    }
    else {
        console.log("Your username or email does not match");
    }
})