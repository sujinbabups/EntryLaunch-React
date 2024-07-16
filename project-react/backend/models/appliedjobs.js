const {Schema,model}= require('mongoose')
const { type } = require('os')

const demo=new Schema({
    job_id:{type:String,required:true,unique:true},
    can_name:{type:String,required:true},
    skills:{type:String,required:true},
    action:{type:String,required:true},


})


const sample=model('applied-jobs',demo)
module.exports=sample;