"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const verifyjwt_1 = require("../middlewares/verifyjwt");
const router = express_1.default.Router();
router.get('/getBooks', book_controller_1.default.getBooks);
router.get('/getBookById/:id', book_controller_1.default.getBookById);
router.post('/addBook', verifyjwt_1.verifyjwt, book_controller_1.default.addBook);
router.patch('/updateBook', verifyjwt_1.verifyjwt, book_controller_1.default.updateBook);
router.delete('/deleteBook', verifyjwt_1.verifyjwt, book_controller_1.default.deleteBook);
router.put('/borrowBook', book_controller_1.default.borrowBook);
router.put('/returnBook', book_controller_1.default.returnBook);
exports.default = router;
