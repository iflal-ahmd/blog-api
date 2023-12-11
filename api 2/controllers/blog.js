function create(Blog) {
	return async function (req, res) {
		const blog = await Blog.create(req.body);
		res.status(201).json(blog);
	}
}

function update(Blog) {
	return async function (req, res) {
		const blog = await Blog.findByPk(req.params.id);
		const done = await blog.update(req.body);
		res.status(201).json(done);
	}
}

function getAll(Blog) {
	// Make the actual request to the database
	return async (req, res) => {
		try {
			const done = await Blog.findAll()
			res.status(201).json(done);
		}catch (e) {
			console.log(e)
			res.status(500).json(e);
		}
	}
}

function getById(Blog) {
	return async function (req, res) {
		const blog = await Blog.findByPk(req.params.id);
		res.status(201).json(blog);
	}
}

function remove(Blog) {
	return async function (req, res) {
		const blog = await Blog.findByPk(req.params.id);
		const done = await blog.destroy();
		res.status(201).json(done);
	}
}

module.exports = {
	create,
	getAll,
	update,
	getById,
	remove
}
