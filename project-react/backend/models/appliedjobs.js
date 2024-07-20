const {Schema,model}= require('mongoose')
const { type } = require('os')

const demo=new Schema({
    job_id:{type:String,required:true},
    job:{type:String,required:true},
    can_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    course:{type:String,required:true},
    skills:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String,required:true},
    action:{type:String,required:true},
    postedBy:{ type: String, ref: 'job-list', required: true}


})


const sample=model('applied-jobs',demo)
module.exports=sample;