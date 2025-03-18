import { pool } from "../config/pool";
class bookRepository {

    async getBooks() {
        try {
            const result = await (await pool).request().query(`SELECT * FROM books`);
            return { status: 200, books: result.recordsets };
        } catch (error) {
            return { status: 500, message: error };
        }
    }

    async getBookById(id: number) {
        try {
            const result = await (await pool).request().input('id', id).query(`SELECT * FROM books WHERE id = @id`);
            return { status: 200, book: result.recordset[0] };
        } catch (error) {
            return { status: 500, message: error };
        }
    }

    async addBook(data: any) {
        try {
            
            const { name, author, price } = data;
            const result = await (await pool).request().input('bookId', data.bookId).input('name', name).input('author', author).input('price', price).query(`INSERT INTO books (bookId, name, author, price) VALUES (@bookId, @name, @author, @price)`);
            return { status: 200, message: "Book added" };
        } catch (error) {
            return { status: 500, message: error };
        }
    }

    async updateBook(data: any) {
        try {
            const { id, name, author, price } = data;
            let newname = name;
            let newauthor = author;
            let newprice = price;
            const current = await (await pool).request().input('bookId', id).query(`SELECT * FROM books WHERE bookId = @bookId`);
            if(!name){
                newname = current.recordset[0].name;
            }
            if(!author){
                newauthor = current.recordset[0].author;
            }
            if(!price){
                newprice = current.recordset[0].price;
            }
            const result = await (await pool).request().input('bookId', id).input('name', newname).input('author', newauthor).input('price', newprice).query(`UPDATE books SET name = @name, author = @author, price = @price WHERE bookId = @bookId`);
            return { status: 200, message: "Book updated" };
        } catch (error) {
            return { status: 500, message: error };
        }
    }

    async deleteBook(id: number) {
        try {
            const result = await (await pool).request().input('bookId', id).query(`DELETE FROM books WHERE bookId = @bookId`);
            return { status: 200, message: "Book deleted" };
        } catch (error) {
            return { status: 500, message: error };
        }
    }

    async borrowBookBLL(data: any) {
        try {

            const { id } = data;
            const result = await (await pool).request().input('bookId', id).query(`UPDATE books SET status ='borrow'  WHERE bookId = @bookId`);
            return { status: 200, message: "Book borrowed" };

        } catch (error) {
                console.log(error);   
        }
    }

    async returnBookBLL(data: any) {
        try {

            const { id } = data;
            const result = await (await pool).request().input('bookId', id).query(`UPDATE books SET status ='available'  WHERE bookId = @bookId`);
            return { status: 200, message: "Book returned" };

        } catch (error) {
            console.log(error);
        }
    }

}


export default new bookRepository();