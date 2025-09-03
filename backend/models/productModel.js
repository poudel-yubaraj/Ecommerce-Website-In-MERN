import mongoose from "mongoose";
import { trim } from "validator";
const productSchema = new mongoose.Schema({
    name:{type:String,required:true, trim:true},
    description:{type:String, required:true},
    price:{type:Number, required:true,min:0},
    image:{type:Array, required:true},
    category:{type:String, required:true},
    subCategory:{type:String, required:true},
    sizes:{type:Array, required:true},
    bestSeller:{type:Boolean, default:false},
    date:{type:Number, required:true}
},{timestamps:true})
const productModel = mongoose.model.product || mongoose.model("product",productSchema);
export default productModel;