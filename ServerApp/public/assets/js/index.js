const url = '/api/v1';

const loginButton = document.querySelector('#btn-login');
const inputPassword = document.querySelector('#input-password');
const inputEmail = document.querySelector('#input-email');
const loginErrorMessage = document.querySelector('#login-error-message');

loginButton.onclick = () => {
    axios.post(url + '/login', {
        user_email: inputEmail.value,
        user_password: inputPassword.value
    })
        .then(function (response) {
            loginErrorMessage.hidden = response.status === 200;
        })
        .catch(function (error) {
            loginErrorMessage.hidden = false;
        });
};