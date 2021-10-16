var db1= require('mongoose');
var url = "mongodb+srv://sachinsa:asdf0001@firstcluster.cumtl.mongodb.net/freshdb?retryWrites=true&w=majority"
db1.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
console.log("succesfully connected to database");
}).catch((err)=>{
 console.error(err, "this is the error");
})

module.exports=db1;