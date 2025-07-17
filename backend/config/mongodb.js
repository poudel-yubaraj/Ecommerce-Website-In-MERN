import mongoose  from "mongoose";

const connectDB = async()=>{
  
    try{
const conn = await  mongoose.connect(`${process.env.CONNECTION_STRING}`)
   if(conn){
    console.log("Connection successful "+conn.connection.name);
   }
    }catch(error){
        console.log("Couldnot connect to the database");
    }
}
export default connectDB