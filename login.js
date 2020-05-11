const bcrypt=require('bcryptjs')
const express=require('express')
const router=express.Router()
const user=require('./models/schema_creation')//import user model(table) from schema creation

router.post("/register",(req,res) => {
    let person = new user({ // creating a new object(row) for the user model with the data we passed
        username : req.body.username,
        password : req.body.password
    });
    console.log(person)
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(person.password,salt,(err,hash)=>{
            if(err){
                console.log("error while genraing salt value")
            }
            person.password=hash
            console.log(person.password)
            console.log(person)
            person.save()   // saving(inserting) the object(row) in the model(table)
            
            .then(result => {   // result will return a success sign like the data passed to save will be returned 
                // investigate by yourself about what is returned while saving(inserting) a object(row)
                res.json({
                    message : "Successful"
                })
            })
            .catch(err => {
                res.json(
                    {
                        message : err.message
                    }
                )
            })
        })
        
        
        });
    });

   
module.exports=router