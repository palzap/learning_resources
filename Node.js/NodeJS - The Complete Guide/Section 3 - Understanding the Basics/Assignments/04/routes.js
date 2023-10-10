const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Welcome to NodeJS!</title></head>');
		res.write('<body><form action="/create_user" method="POST"><input type="text" name="username"><button type="Add User">Send</button></form></body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/users') {
		res.write('<html>');
    	res.write('<head><title>User list</title></head>');
		res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body');
		res.write('</html>');
		return res.end();
	};

	if (url === '/create_user' && req.method === 'POST') {
		const users = [];
		req.on('data', (chunk) => {
			users.push(chunk);
		});
		req.on('end', () => {
			const parsedUsers = Buffer.concat(users).toString();
			console.log(parsedUsers.split('=')[1]);
		});
 		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	};

	res.write('<html>');
	res.write('<head><title>Not a page!</title><head>');
	res.write('<body><h1>Hello there! Try "/" or "/users"!</h1></body>');
	res.write('</html>');
	res.end();
	};

exports.requestHandler = requestHandler;
