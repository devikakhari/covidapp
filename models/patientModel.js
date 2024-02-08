const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }, 
        status:{
            type:String,
            required:true
        },
        symtoms:{
            type:String,
            required:true
        },
        phoneno:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("patient",patientSchema)