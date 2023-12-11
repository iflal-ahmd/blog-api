const express = require('express');
const { Sequelize } = require('sequelize');
const { initModels } = require('./models');
const loadExpress = require('./routes/');
const app = express();

app.get('/', (req, res) => {
	res.send({
		message: 'Hello World!',
		status: "OK"
	});
});

async function init (){

	const sequelize = new Sequelize('blog', 'postgres', 'Jaavac06', {
		host: 'localhost',
		dialect: 'postgres'
	});

	//const sequelize = new Sequelize('postgres@Jaavac06://localhost:5432/blog', )
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		const { User, Blog} = initModels(sequelize);

		loadExpress(app, User, Blog);

	} catch (error) {
		console.error( error);
	}
}


init().catch(err => console.log(err))

app.listen((process.env.PORT || 3000), () => console.log('Example app listening on port 3000!' + process.env.PORT));
