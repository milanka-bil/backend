const apiRouter = require("express").Router();

const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const usersRouter = require("./users");



apiRouter.use("/api", usersRouter, gamesRouter, gamesRouter, categoriesRouter, authRouter);


module.exports = apiRouter; 