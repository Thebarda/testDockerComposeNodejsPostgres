setTimeout(function(){ 
	const express = require('express');
	const server = express();
	const PORT = 3000;
	const { Client } = require('pg');
	const client = new Client("postgres://docker:docker@postgres:5432/docker");

	client.connect()

	server.listen(PORT, () => console.log(`Server running on ${PORT}`));

	server.get('/', (req, res) => res.status(200).send('hello'));
}, 3000);

