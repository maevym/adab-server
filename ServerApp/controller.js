'use strict';

const response = require('./res');
const db = require('./conn');
const md5 = require('md5');
const crypto = require('crypto');
const cookie = require('cookie');
const axios = require('axios');

exports.login = (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
};

exports.doLogin = (req, res) => {
    const {username, password} = req.body;

};