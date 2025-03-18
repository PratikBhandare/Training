"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const movie_controller_1 = __importDefault(require("../Controllers/movie.controller"));
const MovieRouter = express_1.default.Router();
MovieRouter.get("/showAll", movie_controller_1.default.showAll);
MovieRouter.post("/add", movie_controller_1.default.addMovie);
MovieRouter.patch("/update/:id", movie_controller_1.default.updateMoviebyID);
MovieRouter.delete("/delet/:id", movie_controller_1.default.deleteById);
module.exports = MovieRouter;
