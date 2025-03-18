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
Object.defineProperty(exports, "__esModule", { value: true });
const book_repositry_1 = __importDefault(require("../reposiotry/book.repositry"));
class bookService {
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.getBooks();
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.getBookById(id);
        });
    }
    addBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.addBook(data);
        });
    }
    updateBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.updateBook(data);
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.deleteBook(id);
        });
    }
    borrwoBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.borrowBookBLL(data);
        });
    }
    returnBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_repositry_1.default.returnBookBLL(data);
        });
    }
}
exports.default = new bookService();
