import userModel from "../models/userModel.js";

//Logic for user login
 const loginUser = async(req, res)=>{

 }

 //Logic for user register
 const registerUser = async(req,res)=>{
     try{
        const{name,email,password}=req.body;
        const exist = await  userModel.findOne({email});
        if(exist){
            return res.json({success:false, message:"User already exist"});
        }
        
     }catch(error){

     }
 }

 //Logic for Admin login
 const adminLogin = async(req,res)=>{

 }

 export{loginUser,registerUser,adminLogin} 