'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/api/v1/login')
        .post(todoList.login);

    app.route('/api/v1/user/profile')
        .post(todoList.profile);

    app.route('/api/v1/user/picture')
        .post(todoList.getProfilePicture);

    app.route('/api/v1/user/classes')
        .post(todoList.getClasses);
};