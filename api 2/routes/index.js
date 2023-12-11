const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const {json, urlencoded, Router} = require("express");
const methodOverride = require("method-override");


function expressLoader(app, User, Blog) {
	app.use(morgan("combined"));
	app.use(cors({
		credentials: false,
		origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:3000", "http://127.0.0.1/:5173"]
	}));
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(urlencoded({ extended: true }));
	app.use(json());
	app.enable("trust proxy");
	app.use(methodOverride());
	const router = new Router();
	app.use("/api", router);
	require("../routes/blog")(router, Blog, User);
	require("../routes/user")(router, User);
	require("../routes/auth")(router, User);
}

module.exports = expressLoader;
