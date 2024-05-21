const mongoose=require('mongoose')

const LawyerSchema=new mongoose.Schema({
    name:String,
    experience:String,
    areaofExpertise:String,
    email:String,

})

const LawyerModel=mongoose.model("lawyers",LawyerSchema)

module.exports=LawyerModel