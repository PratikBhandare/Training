import { Request, Response } from 'express';
import bookService from '../services/book.service';
class bookController{
     async getBooks(req: Request, res: Response){
        try{
            const books = await bookService.getBooks();
            if(books.status !== 200){
                res.status(500).json(books.message);
            }
            res.status(200).json(books);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async getBookById(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const book = await bookService.getBookById(id);
            if(book.status !== 200){
                res.status(500).json(book.message);
            }
            res.status(200).json(book);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async addBook(req: Request, res: Response){
        try{
            const data = req.body;
            const response = await bookService.addBook(data);
            if(response.status !== 200){
                res.status(500).json(response.message);
            }
            res.status(200).json(response.message);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async updateBook(req: Request, res: Response){
        try{
            const data = req.body;
            const response = await bookService.updateBook(data);
            if(response.status !== 200){
                res.status(500).json(response.message);
            }
            res.status(200).json(response.message);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async deleteBook(req: Request, res: Response){
        try{
            const id = parseInt(req.body.id);
            const response = await bookService.deleteBook(id);
            if(response.status !== 200){
                res.status(500).json(response.message);
            }
            res.status(200).json(response.message);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async borrowBook(req: Request, res: Response){
        try{
            const data = req.body;
            const response = await bookService.borrwoBook(data);
            if(response?.status !== 200){
                res.status(500).json(response?.message);
            }
            res.status(200).json(response?.message);
        }catch(err){
            res.status(500).json({message: err});
        }
    }

    async returnBook(req: Request, res: Response){
        try{
            const data = req.body;
            const response = await bookService.returnBook(data);
            if(response?.status !== 200){
                res.status(500).json(response?.message);
            }
            res.status(200).json(response?.message);
        }catch(err){
            res.status(500).json({message: err});
        }
    }
  
}

export default new bookController();