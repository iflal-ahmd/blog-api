const {create, getAll, update, getById, remove} = require("../controllers/blog");
function blog(router, Blog, User) {
	router.post("/blog", create(Blog, User));
	router.get("/blog", getAll(Blog));
	router.put("/blog/:id", update(Blog));
	router.delete("/blog/:id", remove(Blog));
	router.get("/blog/:id", getById(Blog));
}

module.exports = blog;
