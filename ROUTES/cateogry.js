const { render } = require('ejs');
const express = require('express');
var router= express.Router();
const { deletecateogry, updatecateogry,addcateogry,readCategory} = require('../CONTROLLER/cateogry')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/addcateogry',(req,res)=>{
   // console.log(req.body)
 addcateogry(req.body).then((x)=>{res.render("cateogry",{
    message:"succesfully created category",message2:"",message1:""
})})

.catch((err)=>{res.render("cateogry",{
    message:err,message1:"",message2:""
})})

})

router.post('/deletecateogry',
(req,res)=>{
    // console.log(req.body)
    deletecateogry(req.body)
    .then((x)=>{res.render("cateogry",{
        message2:"succesfully deleted ",message1:"",message:""
    })})
    
    .catch((err)=>{res.render("cateogry",{
        message2:err,message:"",message1:""
    })})

})

 router.post('/updatecateogry', (req,res)=>{
    console.log(req.body) 
    updatecateogry(req.body)
    .then((x)=>{res.render("cateogry",{
        message1:"succesfully updated cateogry",message2:"",message:""
    })})
    
    .catch((err)=>{res.render("cateogry",{
        message1:err,message2:"",message:""
    })})

})

router.get('/read',(req,res)=>{
    readCategory().then((x)=>{
        //console.log(x)
        res.render("rtree",{
            message: x
        });
    }).catch((x)=>{ console.log(error)})
})

module.exports=router;