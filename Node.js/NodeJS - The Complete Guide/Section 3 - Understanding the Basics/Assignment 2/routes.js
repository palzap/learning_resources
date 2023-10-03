const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Welcome to NodeJS!</title></head>');
		res.write('<body><p>Check dummy user list on "/users"</p></body>');
		res.write('</html>');
	return res.end();
	}

	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body');
		res.write('</html>');
		return res.end();
	};

	res.write('<html>');
	res.write('<head><title>Not a page!</title><head>');
	res.write('<body><h1>Hello there! Try "/" or "/users"!</h1></body>');
	res.write('</html>');
	res.end();
	};

exports.requestHandler = requestHandler;