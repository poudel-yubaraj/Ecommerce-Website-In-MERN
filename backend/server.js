import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//midddleware
app.use(express.json()); 

//API endpoints
app.get('/',(req, res)=>{
    res.send('API working')
})

app.use('/api/user', userRouter);
//starting server
app.listen(port,()=>console.log('Server started on PORT:'+port))