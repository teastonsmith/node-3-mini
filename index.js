require('dotenv').config()

const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING } = process.env

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}`);
});

massive(CONNECTION_STRING).then(dbInstance => {
	app.set('db', dbInstance)
})