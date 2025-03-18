import express from "express"
import movieController from "../Controllers/movie.controller";

const MovieRouter=express.Router();

MovieRouter.get("/showAll",movieController.showAll)
MovieRouter.post("/add",movieController.addMovie)
MovieRouter.patch("/update/:id",movieController.updateMoviebyID)
MovieRouter.delete("/delet/:id",movieController.deleteById)

export =MovieRouter;