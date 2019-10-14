const url = '/api/v1';

const loginButton = document.querySelector('#btn-login');
const loginForm = document.querySelector('#login-form');

loginButton.onclick = () => {
    loginForm.submit();
};