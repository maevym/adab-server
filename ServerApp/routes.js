'use strict';

module.exports = function(app) {
    const todoList = require('./api');
    const controller = require('./controller');

    // HTML routes below
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.route('/login')
        .get(controller.login);

    app.route('/login')
        .post(controller.doLogin);

    app.route('/home')
        .get(controller.home);

    app.route('/session')
        .get(controller.session);

    app.get('/socket', (req, res) => {
        res.sendFile(__dirname + '/public/socket.html');
    });

    // API Routes below
    app.route('/api/v1/login')
        .post(todoList.login);

    app.route('/api/v1/user/profile')
        .get(todoList.profile);

    app.route('/api/v1/user/picture')
        .get(todoList.getProfilePicture);

    app.route('/api/v1/user/sessions')
        .get(todoList.getSessions);

    app.route('/api/v1/session/details')
        .post(todoList.sessionDetails);

    app.route('/api/v1/session/discussions')
        .post(todoList.discussions);

    app.route('/api/v1/session/discussions/new')
        .post(todoList.newDiscussion);
};