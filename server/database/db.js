import mongoose from "mongoose";
export const Connection=async(URL)=>{
    try {
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log('Successfully connected to database !!')
        
    } catch (error) {
        console.log('Error while connecting to database: ',error)
    }
};