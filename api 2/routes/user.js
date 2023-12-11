const {create, getAll} = require("../controllers/user");
const {update, remove, getById} = require("../controllers/blog");
function user(router, User, Blog) {
	router.post("/user", create(User, Blog));
	router.get("/user", getAll(User));
	router.put("/user/:id", update(User));
	router.delete("/user/:id", remove(User));
	router.get("/user/:id", getById(User));
}

module.exports = user;
