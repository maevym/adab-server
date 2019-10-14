'use strict';

exports.ok = function(values, res) {
    const data = {
        'status': 200,
        'values': values
    };
    res.status(200).json(data);
    res.end();
};

exports.unauthorized = function(message, res) {
    const data = {
        'status': 401,
        'values': values
    };
    res.status(401).json(data);
    res.end();
};

exports.forbidden = function(message, res) {
    const data = {
        'status': 403,
        'values': values
    };
    res.status(403).json(data);
    res.end();
};

exports.serverError = function(message, res) {
    const data = {
        'status': 500,
        'values': values
    };
    res.status(500).json(data);
    res.end();
};