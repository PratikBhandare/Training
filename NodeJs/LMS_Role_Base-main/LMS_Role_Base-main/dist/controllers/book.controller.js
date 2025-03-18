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
const book_service_1 = __importDefault(require("../services/book.service"));
class bookController {
    getBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield book_service_1.default.getBooks();
                if (books.status !== 200) {
                    res.status(500).json(books.message);
                }
                res.status(200).json(books);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const book = yield book_service_1.default.getBookById(id);
                if (book.status !== 200) {
                    res.status(500).json(book.message);
                }
                res.status(200).json(book);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield book_service_1.default.addBook(data);
                if (response.status !== 200) {
                    res.status(500).json(response.message);
                }
                res.status(200).json(response.message);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield book_service_1.default.updateBook(data);
                if (response.status !== 200) {
                    res.status(500).json(response.message);
                }
                res.status(200).json(response.message);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.body.id);
                const response = yield book_service_1.default.deleteBook(id);
                if (response.status !== 200) {
                    res.status(500).json(response.message);
                }
                res.status(200).json(response.message);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    borrowBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield book_service_1.default.borrwoBook(data);
                if ((response === null || response === void 0 ? void 0 : response.status) !== 200) {
                    res.status(500).json(response === null || response === void 0 ? void 0 : response.message);
                }
                res.status(200).json(response === null || response === void 0 ? void 0 : response.message);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
    returnBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield book_service_1.default.returnBook(data);
                if ((response === null || response === void 0 ? void 0 : response.status) !== 200) {
                    res.status(500).json(response === null || response === void 0 ? void 0 : response.message);
                }
                res.status(200).json(response === null || response === void 0 ? void 0 : response.message);
            }
            catch (err) {
                res.status(500).json({ message: err });
            }
        });
    }
}
exports.default = new bookController();
