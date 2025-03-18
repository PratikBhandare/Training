"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const movies_service_1 = __importDefault(require("../Services/movies.service"));
class MovieController {
    addMovie(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            let movie = req.body;
            console.log(movie);
            movies_service_1.default.addMovie(movie);
            resp.send("Done..!");
        });
    }
    showAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield movies_service_1.default.showAll();
            resp.send(result);
        });
    }
    deleteById(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movies_service_1.default.deletById(req.params.id);
            resp.send("Deleted...");
        });
    }
    updateMoviebyID(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movies_service_1.default.updateById(req.params.id, req.body);
            resp.send("Updated...");
        });
    }
}
module.exports = new MovieController();
