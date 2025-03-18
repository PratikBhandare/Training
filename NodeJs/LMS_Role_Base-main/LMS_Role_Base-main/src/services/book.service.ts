import bookRepositry from "../reposiotry/book.repositry";

class bookService {
    async getBooks() {
        return await bookRepositry.getBooks();
    }

    async getBookById(id: number) {
        return await bookRepositry.getBookById(id);
    }

    async addBook(data: any) {
        return await bookRepositry.addBook(data);
    }

    async updateBook(data: any) {
        return await bookRepositry.updateBook(data);
    }

    async deleteBook(id: number) {
        return await bookRepositry.deleteBook(id);
    }
    async borrwoBook(data: any) {
        return await bookRepositry.borrowBookBLL(data);
    }
    async returnBook(data: any) {
        return await bookRepositry.returnBookBLL(data);
    }
}

export default new bookService();