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
const database_1 = require("../config/database");
const Movie_1 = require("../Entities/Movie");
const Movie_repo_1 = __importDefault(require("../Repository/Movie.repo"));
const movieRepository = database_1.AppDataSource.getTreeRepository(Movie_1.Movie);
class MovieServiece {
    addMovie(m) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Movie_repo_1.default.addMovie(m);
        });
    }
    showAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Movie_repo_1.default.showAll();
        });
    }
    deletById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Movie_repo_1.default.deletById(id);
        });
    }
    updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Movie_repo_1.default.updateById(id, data);
        });
    }
}
module.exports = new MovieServiece();
