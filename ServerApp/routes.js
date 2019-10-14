'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/api/v1/login')
        .post(todoList.login);

    app.route('/api/v1/user/profile')
        .post(todoList.profile);
};