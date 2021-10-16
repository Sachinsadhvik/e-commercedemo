const express =require("express");
var app= new express();

var index= require("./ROUTES/index")
port = process.env.PORT || 3999
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('views','VIEW');
app.set('view engine',"ejs");


app.use(express.static('STATIC'))
 app.use('/', index);

app.get('/crudproduct',(req,res)=>{
    res.render('product',{
        message:"",message1:"",message2:""
    })})
    // res.send("hello world fifty hunderds are for sure will be coming ")

app.get('/crudcateogry',(req,res)=>{
    res.render('cateogry',{
        message:"",message1:"",message2:""
    })})
    // res.send("hello world fifty hunderds are for sure will be coming ")
app.listen(port,()=>{console.log("server started")})