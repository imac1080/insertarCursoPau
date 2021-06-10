const express     = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
require('dotenv').config({path: 'variables.env'});
const cors =require('cors');

const app		  = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(process.env.DB_URL, (err, database) => {
	const myAwesomeDB = database.db('CursosDB')
	if (err) return console.log(err)
	require('./app/routes')(app, myAwesomeDB);
	app.listen(port, () => {
		console.log("We are live on " + port);
	})

})