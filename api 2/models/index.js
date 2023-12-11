const {createBlog} = require('./blog');
const {createUser} = require('./user');
function initModels (sequelize) {
	const Blog = createBlog(sequelize);
	const User = createUser(sequelize);


	User.hasMany(Blog, {as: 'blogs'})
	Blog.belongsTo(User, {as: "User", foreignKey: "userId"})
	User.sync({ force: true });
	Blog.sync({ force: true });
	return { User, Blog}
}

module.exports = {initModels}
