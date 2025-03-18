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
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = require("../config/pool");
class bookRepository {
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (yield pool_1.pool).request().query(`SELECT * FROM books`);
                return { status: 200, books: result.recordsets };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (yield pool_1.pool).request().input('id', id).query(`SELECT * FROM books WHERE id = @id`);
                return { status: 200, book: result.recordset[0] };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    addBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, author, price } = data;
                const result = yield (yield pool_1.pool).request().input('bookId', data.bookId).input('name', name).input('author', author).input('price', price).query(`INSERT INTO books (bookId, name, author, price) VALUES (@bookId, @name, @author, @price)`);
                return { status: 200, message: "Book added" };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    updateBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, author, price } = data;
                let newname = name;
                let newauthor = author;
                let newprice = price;
                const current = yield (yield pool_1.pool).request().input('bookId', id).query(`SELECT * FROM books WHERE bookId = @bookId`);
                if (!name) {
                    newname = current.recordset[0].name;
                }
                if (!author) {
                    newauthor = current.recordset[0].author;
                }
                if (!price) {
                    newprice = current.recordset[0].price;
                }
                const result = yield (yield pool_1.pool).request().input('bookId', id).input('name', newname).input('author', newauthor).input('price', newprice).query(`UPDATE books SET name = @name, author = @author, price = @price WHERE bookId = @bookId`);
                return { status: 200, message: "Book updated" };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (yield pool_1.pool).request().input('bookId', id).query(`DELETE FROM books WHERE bookId = @bookId`);
                return { status: 200, message: "Book deleted" };
            }
            catch (error) {
                return { status: 500, message: error };
            }
        });
    }
    borrowBookBLL(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = data;
                const result = yield (yield pool_1.pool).request().input('bookId', id).query(`UPDATE books SET status ='borrow'  WHERE bookId = @bookId`);
                return { status: 200, message: "Book borrowed" };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    returnBookBLL(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = data;
                const result = yield (yield pool_1.pool).request().input('bookId', id).query(`UPDATE books SET status ='available'  WHERE bookId = @bookId`);
                return { status: 200, message: "Book returned" };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new bookRepository();
