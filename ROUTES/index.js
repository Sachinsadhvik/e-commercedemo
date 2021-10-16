const express = require('express');
const router = express.Router();
const cateogryRoute= require("./cateogry");
const productRoute=require("./product");
//const mealRoute=require("./");

router.use('/product',productRoute);
router.use('/cateogry',cateogryRoute);




module.exports=router;