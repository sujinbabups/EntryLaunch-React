const {Schema,model}= require('mongoose')


const demo=new Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userType:{type:String}


})


const sample=model('Candidate_Reg',demo)
module.exports=sample;