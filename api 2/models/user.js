const {  DataTypes } = require('sequelize');

function createUser(sequelize) {
	const User = sequelize.define('User', {
		username: { type: DataTypes.TEXT, allowNull: true },
		firstName: { type: DataTypes.TEXT, allowNull: true },
		lastName: { type: DataTypes.TEXT, allowNull: true },
		password: { type: DataTypes.TEXT, allowNull: true },
	}, {
		freezeTableName: true,
		tableName: 'user',
	});


	return User;
}

module.exports = { createUser };
