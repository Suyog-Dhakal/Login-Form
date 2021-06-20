const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Login = require('./models/logins');
const {json} = require('express');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);


app.get("/",(req,res)=>{
    res.render("login")
});

//create a new user in our databse
app.post("/login",async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;

        const loginEmployee = new Login({
            name: username,
            password: password,
        })

        const logined = await loginEmployee.save();
        res.status(201).render("login");

    }catch(error){
        res.status(400).send("invalid");
    }
}
)

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})