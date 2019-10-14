'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    
    app.get('/home', (req, res) => {
        res.sendFile(__dirname + '/public/home.html');
    });

    app.route('/api/v1/login')
        .post(todoList.login);

    app.route('/api/v1/user/profile')
        .get(todoList.profile);

    app.route('/api/v1/user/picture')
        .get(todoList.getProfilePicture);

    app.route('/api/v1/user/classes')
        .get(todoList.getClasses);

    app.route('/api/v1/session/details')
        .get(todoList.sessionDetails);
};