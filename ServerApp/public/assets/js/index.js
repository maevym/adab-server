const url = '/api/v1';

const loginButton = document.querySelector('#btn-login');
const inputPassword = document.querySelector('#input-password');
const inputEmail = document.querySelector('#input-email');

loginButton.onclick = () => {
    axios.post(url + '/login', {
        user_email: inputEmail.value,
        user_password: inputPassword.value
    })
        .then(function (response) {
            alert(response);
        })
        .catch(function (error) {
            alert(error);
        });
};