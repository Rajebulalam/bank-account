// Logib Button Event Handler

document.getElementById('login-btn').addEventListener('click', function () {

    // Taken User Email
    const emailFeild = document.getElementById('email-field');
    const userEmail = emailFeild.value;
    emailFeild.value = '';

    // Taken User Password
    const passwordFeild = document.getElementById('password-field');
    const userPassword = passwordFeild.value;
    emailFeild.value = '';

    // Lgin Condition
    if (userEmail == 'rajebulalam01@gmail.com' && userPassword == 'password') {
        window.location.href = 'account.html';
    } else {
        alert('Please!! Give The Correct Input');
    }

});