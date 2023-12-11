function login(User) {
	return async function (req, res) {
		try {
			const user = await User.findOne({where: {username: req.body.username, password: req.body.password}});
			if(user) {
				res.status(200).json({
					message: 'Login successful',
					user: user
				});
			}else {
				res.status(400).json({
					message: 'Invalid credentials',
					user: null
				});
			}
		}catch (e) {
			console.log(e)
			res.status(400).json({
				message: 'Invalid credentials',
				user: null
			});
		}

	}
}

module.exports = { login };
