const express = require('express');

const server = express();

server.use('/users', (req, res, next) => {
    console.log('/users');
    res.send('<p>This Middleware handles /users</p>');
});

server.use('/', (req, res, next) => {
    console.log('/');
    res.send('<p>This Middleware handles /</p>');
});

server.listen(3000);