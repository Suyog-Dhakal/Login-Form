
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
   },
   password:{
    type:String,
    required:true,
   }

})

const Login = new mongoose.model("Login",employeeSchema);

module.exports = Login;