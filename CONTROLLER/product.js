
const productModel = require('../MODELS/productModel');
const categoryModel= require('../MODELS/categoryModel');

const addProduct=(Details)=>{
    return new Promise( async (resolve,reject)=>{
       const newproduct=  new productModel();
       var x=await categoryModel.find({Category:Details.cateogry})
      console.log(x)    
       if(x.length!=0){
        newproduct.Productname= Details.product;
        newproduct.parentId= Details.cateogry;
        newproduct.description=Details.description;
        newproduct.cat="product";
        //newmeal.datetime= new Date();
        newproduct.save(function(err, doc) {
            if (err) {console.log(err)}//return reject(newproduct);}
            else { return resolve(newproduct)}
          })
        }
        else { 
            return reject("not found category")
        }
        }
        
    )   
}

const deleteProduct=(Details)=>{
      console.log(Details)
        return new Promise( async(resolve,reject)=>{
           
            const product= await productModel.deleteOne({ Productname: Details.product, parentId:Details.parentId })
           if(product.deletedCount==1){
               resolve(product)
           }
           else {
               reject("product or combination doesnt exsist");
           }
          // resolve(meals)
        
        })}


const updateProduct=(Details)=>{
    return new Promise( async(resolve,reject)=>{ 
        var x=await categoryModel.find({Category:Details.parentId})  
        var y= await productModel.find({Productname:Details.normal})
        if(x.length!=0 && y.length!=0){
        for (var prop in Details) {
            if (Details[prop] === '' || Details[prop] === undefined) {
                delete Details[prop];
            }}
             var x =Details.normal
              delete Details.normal;
              console.log(Details)

         if(await productModel.findOneAndUpdate({Productname: x},Details)){
             resolve()
         }
         else {
             reject();
         }
        }

        else { 
            return reject("cateogry not found")
        }
})}

const readProduct=()=>{
    return new Promise( async (resolve,reject)=>{
        
             const ProductList = await productModel.find({cat:"product"})
             if(ProductList){
                      resolve(ProductList);
             }
             else {
                 reject(ProductList)
             }
    })
    }

    // const Pagination=(page)=>{

    //     return new Promise( async(resolve,reject)=>{
            
    //         const product= await productModel.find().limit(4).skip(page * 4)
    //        if(product){
    //            resolve(product)
    //        }
    //        else {
    //            reject(product);
    //        }
        
    //     })}


  module.exports.readProduct=readProduct;
  module.exports.updateProduct=updateProduct;
  module.exports.addProduct=addProduct;
  module.exports.deleteProduct=deleteProduct;