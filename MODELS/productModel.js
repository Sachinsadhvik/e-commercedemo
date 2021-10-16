
const Schema = require('mongoose').Schema;
//const ObjectId = Schema.ObjectId;
const db1 = require('../DB/db')
const ProductSchema = new Schema({
    Productname:{type: String, required: true},
    parentId: {type: String, required: true},
description: String,
cat: String

}); 

const productModel = db1.model('MEALS',ProductSchema);
module.exports = productModel; 