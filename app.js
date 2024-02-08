const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controllers/patientRouter")
const patientModel = require("./models/patientModel")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://devika2001:devika2001@cluster0.wpyrwqg.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/patient",patientRouter)

app.listen(3001,()=>{
    console.log("server running")
})