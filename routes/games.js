const gamesRouter = require("express").Router();
const {
  createGame,
  findGameById,
  findAllGames,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middlewares/games");

const {
  sendGameCreated,
  sendGameById,
  sendAllGames,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
