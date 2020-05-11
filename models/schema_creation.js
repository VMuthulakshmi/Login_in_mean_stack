const mongoose =require('mongoose')

const user_schema=mongoose.Schema({
    //dropdups:does not allows duplicate data.
    username:{type: String,required:true,unique:true,dropDups: true},
    password:{type:String,require:true}
})
module.exports=mongoose.model("Users",user_schema)
