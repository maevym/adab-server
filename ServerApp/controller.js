'use strict';

const response = require('./res');
const db = require('./conn');
const md5 = require('md5');
const crypto = require('crypto');
const cookie = require('cookie');
const axios = require('axios');

exports.login = (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
};

exports.doLogin = (req, res) => {
    const {email, password} = req.body;
    const host = req.protocol + '://' + req.get('host');

    axios.post(host + '/api/v1/login', {
        user_email: email,
        user_password: password
    })
        .then(function(response) {
            res.setHeader('Set-Cookie', cookie.serialize('session_id', response.data.values.session_id, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 0.5 // 1 week
            }));
            res.redirect('/home');
        })
        .catch(function(e) {
            console.log(e);
            res.redirect("/login?error=" + e.message);
        });

};