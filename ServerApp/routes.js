'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.route('/api/v1/login')
        .post(todoList.login);

    app.route('/api/v1/user/profile')
        .post(todoList.profile);

    app.route('/api/v1/user/picture')
        .post(todoList.getProfilePicture);

    app.route('/api/v1/user/classes')
        .post(todoList.getClasses);

    app.route('/api/v1/session/details')
        .post(todoList.sessionDetails);
};