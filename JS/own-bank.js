// this section used for index.html page
document.getElementById('submit-button').addEventListener('click', function () {
    // get user account 
    const accountNo = document.getElementById('for-account');
    const userAccount = accountNo.value;
    // get user password
    const password = document.getElementById('for-password');
    const userPassword = password.value;

    if (userAccount == '20183290523' && userPassword == 'shawn@57') {
        window.location.href = 'banking-site.html';
    }
})