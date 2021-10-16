
const cateogryModel = require('../MODELS/categoryModel');
const productModel = require('../MODELS/productModel');


const addcateogry=(Details)=>{
    return new Promise( async (resolve,reject)=>{
       const newcateogry= new cateogryModel();
       var x=await cateogryModel.find({Category:Details.parentId})
       if(x.length!=0){
        newcateogry.Category= Details.Category; 
        newcateogry.parentId= Details.parentId;
        newcateogry.cat="category";
        //newmeal.datetime= new Date();
        newcateogry.save(function(err, doc) {
            if (err) {console.log(err)}//return reject(newproduct);}
            else { return resolve(newcateogry)}
          })
       }
       else { 
           return reject("parents cateogry doesnt exsist")
       }
        }
        
    )   
}

const deletecateogry=(Details)=>{

        return new Promise( async(resolve,reject)=>{
            const product= await productModel.deleteMany({ parentId: Details.Category })
            const subcategories= await cateogryModel.deleteMany({ parentId: Details.Category })
            const category= await cateogryModel.deleteOne({ Category: Details.Category,parentId:Details.parentId })
            
           if(category.deletedCount==1 || product.deletedCount==1){
               resolve(category)
           }
           else {
               reject("oops! cateogry not found");
           }
          // resolve(meals)
        
        })}


const updatecateogry=(Details)=>{
    console.log(Details)
    return new Promise( async(resolve,reject)=>{ 
        var parent=  await cateogryModel.find({Category:Details.parentId})
        var category=  await cateogryModel.find({Category:Details.Category})
    if(parent.length!=0 && category.length!=0){
        for (var prop in Details) {
            if (Details[prop] === '' || Details[prop] === undefined) {
                delete Details[prop];
            }}
             var x =Details.Category;
              delete Details.Category;
              console.log(Details)
         if(await cateogryModel.findOneAndUpdate({Category: x},Details)){
             resolve()
         }
         else {
             reject();
         }
        }

        else {  return reject("oops! cateogry doesnt exsist ")}
})}


const readCategory=()=>{
return new Promise( async (resolve,reject)=>{
         const cateogryList = await cateogryModel.find({cat:"category"})
         if(cateogryList){
                  resolve(cateogryList);
         }
         else {
             reject(cateogryList)
         }
})
}



  module.exports.readCategory= readCategory;
  module.exports.updatecateogry=updatecateogry;
  module.exports.addcateogry=addcateogry;
  module.exports.deletecateogry=deletecateogry;