'use strict';

const response = require('./res');
const db = require('./conn');
const md5 = require('md5');
const crypto = require('crypto');

exports.profile = (req, res) => {
    const query = "SELECT user_id, user_name, user_email, user_picture, group_name, is_staff, can_talk FROM users INNER JOIN user_groups ON users.user_group = user_groups.group_id WHERE user_token = ?";
    const {session_id: userToken} = req.body;

    db.get(query, [userToken], (error, row) => {
       if (!error) {
           response.ok(row, res);

       } else {
            response.serverError(error, res);
       }
    });

};

exports.login = (req, res) => {
    const {user_email: userEmail, user_password: userPassword} = req.body;
    const query = "SELECT user_id FROM users WHERE user_email = ? AND user_password = ?";

    db.all (query, [userEmail, md5(userPassword)], function(error, row) {
        if (!error) {
            if (row.length === 1) {
                const session = generateKey();
                const query2 = "UPDATE users SET user_token = ? WHERE user_id = ?";

                db.run(query2, [session, row[0].user_id], (error2) => {
                    if (!error2) {
                        response.ok({"session_id": session}, res);
                    } else {
                        response.serverError(error, res);
                    }
                });

            } else {
                response.unauthorized("Username or password is invalid.", res);
            }
        } else {
            response.serverError(error, res);
        }
    });
};

exports.index = (req, res) => {
    response.ok("Hello from the Node JS RESTful side!", res)
};

const generateKey = () => {
    return crypto.randomBytes(32).toString('base64');
};