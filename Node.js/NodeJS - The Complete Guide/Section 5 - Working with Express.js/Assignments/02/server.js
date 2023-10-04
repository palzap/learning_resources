const express = require('express');

const server = express();

server.use((req, res, next) => {
    console.log('1st');
    next();
});

server.use((req, res, next) => {
    console.log('2nd');
    res.send('<p>Done!</p>');
});

server.listen(3000);