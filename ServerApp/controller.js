'use strict';

const response = require('./res');
const db = require('./conn');
const md5 = require('md5');
const crypto = require('crypto');

exports.sessionDetails = (req, res) => {
    const query = "SELECT user_sessions.session_id, courses.course_id, course_name, course_description, session_th, session_mode, classes.class_name, session_room, users.user_id AS lecturer_id, users.user_name AS lecturer_name, session_startdate, session_enddate, content FROM sessions INNER JOIN classes ON sessions.class_id = classes.class_id INNER JOIN courses ON classes.course_id = courses.course_id INNER JOIN users ON classes.class_lecturer_id = users.user_id INNER JOIN user_sessions ON sessions.session_id = user_sessions.session_id WHERE sessions.session_id = ? AND user_sessions.user_id = ?"

};

exports.getClasses = (req, res) => {
    const query = "SELECT sessions.session_id, courses.course_id, course_name, session_th, session_mode, classes.class_name, session_room, users.user_id AS lecturer_id, users.user_name AS lecturer_name, session_startdate, session_enddate FROM user_sessions INNER JOIN sessions ON user_sessions.session_id = sessions.session_id INNER JOIN classes ON sessions.class_id = classes.class_id INNER JOIN courses ON classes.course_id = courses.course_id INNER JOIN users ON classes.class_lecturer_id = users.user_id  WHERE user_sessions.user_id = (SELECT user_id FROM users WHERE user_token = ?)";

    const {session_id: userToken} = req.body;

    db.all(query, [userToken], (error, row) => {
        if (!error) {
            response.ok(row, res);
        } else {
            response.serverError(error, res);
        }
    });
};

exports.getProfilePicture = (req, res) => {
    const query = "SELECT user_picture FROM users WHERE user_token = ?";
    const {session_id: userToken} = req.body;

    db.get(query, [userToken], (error, row) => {
       if (!error) {
           res.send(row.user_picture);
           res.end();
       } else {
           response.serverError(error, res);
       }
    });
};

exports.profile = (req, res) => {
    const query = "SELECT user_id, user_name, user_email, group_name, is_staff, can_talk FROM users INNER JOIN user_groups ON users.user_group = user_groups.group_id WHERE user_token = ?";
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
                        res.cookie()
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