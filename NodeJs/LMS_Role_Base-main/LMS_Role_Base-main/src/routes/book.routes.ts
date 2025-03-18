import express from 'express'
import bookController from '../controllers/book.controller';
import { verifyjwt } from '../middlewares/verifyjwt';

const router = express.Router();

router.get('/getBooks',bookController.getBooks)

router.get('/getBookById/:id',bookController.getBookById)   

router.post('/addBook',verifyjwt,bookController.addBook)

router.patch('/updateBook',verifyjwt,bookController.updateBook)

router.delete('/deleteBook',verifyjwt,bookController.deleteBook)

router.put('/borrowBook',bookController.borrowBook)

router.put('/returnBook',bookController.returnBook)

export default router;  