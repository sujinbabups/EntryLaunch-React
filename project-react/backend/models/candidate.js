const {Schema,model}= require('mongoose')


const demo=new Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userType:{type:String},
    dob:{type:Date},
    course:{type:String},
    passingyr:{type:String},
    grade:{type:String},
    appliedJobs: [{ type: Schema.Types.ObjectId, ref: 'job-list' }]


})


const sample=model('Candidate_Reg',demo)
module.exports=sample;