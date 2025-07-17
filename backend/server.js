import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
const app = express();
const port = process.env.PORT || 4000;
connectDB();
//midddleware
app.use(express.json()); 

//API endpoints
app.get('/',(req, res)=>{
    res.send('API working')
})

//starting server
app.listen(port,()=>console.log('Server started on PORT:'+port))