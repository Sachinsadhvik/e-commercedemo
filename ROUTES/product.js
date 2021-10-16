const express = require('express');
var router= express.Router();
const {addProduct,deleteProduct,updateProduct,readProduct,Pagination} = require('../CONTROLLER/product')
const productModel = require('../MODELS/productModel');

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.get('/register',(req,res)=>{
    res.render("register",{
        message:" "
    });
})

router.get
router.post('/addproduct',(req,res)=>{
    addProduct(req.body).then((x)=>{res.render("product",{
        message:"succesfully added product",message1:"",message2:""
    })})
    
    .catch((err)=>{res.render("product",{
        message:err,message1:"",message2:""
    })})

})

router.post('/deleteproduct',
(req,res)=>{deleteProduct(req.body)
    .then((x)=>{res.render("product",{
        message2:"succesfully deleted product",message1:"",message:""
    })})
    
    .catch((err)=>{res.render("product",{
        message2:err,message1:"",message:""
    })})

})


 router.post('/updateproduct', (req,res)=>{
    console.log(req.body) 
    updateProduct(req.body)
    .then((x)=>{res.render("product",{
        message1:"succesfully updated product",message2:"",message:""
    })})
    
    .catch((err)=>{res.render("product",{
        message1:err,message:"",message2:""
    })})

})

router.get('/readProduct',(req,res)=> {
readProduct().then((x)=>{ 
    console.log(x)
    res.render('productlist',{
        message: x
    })
}
)
})

// router.get('/page/:page',(req,res)=> {
// //    y= productModel.count()
// //     console.log (y)
// // console.log(req.params.page)
// var z=parseInt(req.params.page)
//     Pagination(z).then((x)=>{ 
//         res.render('pagination',{
//             message: x
//         })
//     }).catch((err)=>{console.log(err,"this is the error")})
// } )


//pagination 
router.get('/page', async (req, res) => {
    try {
        // Adding Pagination
        const limitValue = req.query.limit || 2;
        const page = req.query.page || 0;
        const skipValue=  parseInt(page) * limitValue;
        const filteritem= req.query.filter || "product"
        // const filter= { parentId:  } || {cat:"product"}
       if(filteritem=="product"){
             filter = {cat:"product"}
        }
        else {
             filter= { parentId: filteritem  } 
        }
        console.log(filteritem)
        var products = await productModel.find(filter)
            .limit(parseInt(limitValue)).skip(skipValue);
            products.unshift({"total count" :products.length})
        res.status(200).send(products);
    } catch (e) {
        console.log(e);
    }
});


module.exports=router;