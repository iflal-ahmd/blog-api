const {DataTypes} = require("sequelize");

function createBlog (sequelize){
	const Blog = sequelize.define('Blog', {
		// Model attributes are defined here
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.STRING
			// allowNull defaults to true
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {freezeTableName: true, tableName: 'blog'})
	return Blog;
}

module.exports = {createBlog}
