const express=require("express")

const patientModel = require("../models/patientModel")

const router=express.Router()
patientModel
router.post("/add",async(req,res)=>{
    let data=req.body       //reading value
    let patient=new patientModel(data)
    let result=await patient.save()

    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await patientModel.find()
    res.json(data)
})


router.post("/patient_search",async(req,res)=>{
    let input=req.body       //reading value
    let data=await patientModel.find(input)
    res.json(data)
})

module.exports=router