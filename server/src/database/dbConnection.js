import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose"; //just mongoose import!

const DB_URL = process.env.DB_URL;
//Database connection here!
 const dbConnection  = ()=>{
    mongoose.connect(DB_URL,{
       dbName: "Job_Portal"

    }).then(()=>{ //agar connect ho jaye toh!
       console.log("MongoDB Connected Sucessfully !")
    }).catch((error)=>{
        console.log(`Failed to connect ${error.message}`)
    })
    
}
export default dbConnection;