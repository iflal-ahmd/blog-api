const {login} = require("../controllers/auth");
function auth(router, User) {
	router.post("/login", login(User));
}

module.exports = auth;
