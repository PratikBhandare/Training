import express from 'express'
import authRouter from './routes/auth.routes'
import bookRouter from './routes/book.routes'

const app = express()

app.use(express.json())

app.use('/api',authRouter)
app.use('/api',bookRouter)


app.listen(3000,()=>{
    console.log(`server is running on port ${3000}`);
})