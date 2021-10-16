const { render } = require('ejs');
const express = require('express');
var router= express.Router();
const { deletecateogry, updatecateogry,addcateogry,readCategory} = require('../CONTROLLER/cateogry')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get('/deletecateogry',(req,res)=>{
    res.render("deletecateogry",{
        message:" "
    });
})
router.get('/updatecateogry',(req,res)=>{
    res.render("updatecateogry",{
        message:" "
    });
})
router.post('/addcateogry',(req,res)=>{
   // console.log(req.body)
 addcateogry(req.body).then((x)=>{res.render("cateogry",{
    message:"succesfully created category"
})})

.catch((err)=>{res.render("cateogry",{
    message:err
})})

})

router.post('/deletecateogry',
(req,res)=>{
    // console.log(req.body)
    deletecateogry(req.body)
    .then((x)=>{res.render("deletecateogry",{
        message:"succesfully deleted "
    })})
    
    .catch((err)=>{res.render("deletecateogry",{
        message:err
    })})

})

 router.post('/updatecateogry', (req,res)=>{
    console.log(req.body) 
    updatecateogry(req.body)
    .then((x)=>{res.render("updatecateogry",{
        message:"succesfully updated cateogry"
    })})
    
    .catch((err)=>{res.render("updatecateogry",{
        message:err
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