function create(User) {
	// Make the actual request to the database
	return async (req, res) => {
		try {
			const done = await User.create(req.body)
			res.status(201).json(done);
		}catch (e) {
			console.log(e)
			res.status(500).json(e);
		}
	}
}

function update(User) {
	return async function (req, res) {
		const user = await User.findByPk(req.params.id);
		const done = await user.update(req.body);
		res.status(201).json(done);
	}
}

function getById(User) {
	return async function (req, res) {
		const user = await User.findByPk(req.params.id);
		res.status(201).json(user);
	}
}

function remove(User) {
	return async function (req, res) {
		const user = await User.findByPk(req.params.id);
		const done = await user.destroy();
		res.status(201).json(done);
	}
}

function getAll(User) {
	// Make the actual request to the database
	return async (req, res) => {
		try {
			const done = await User.findAll()
			res.status(201).json(done);
		}catch (e) {
			console.log(e)
			res.status(500).json(e);
		}
	}
}

module.exports = { create, getAll, update, getById, remove };
