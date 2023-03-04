import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import courseRouter from './routes/courseRoutes.js'
const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use("/api/course",courseRouter)


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})