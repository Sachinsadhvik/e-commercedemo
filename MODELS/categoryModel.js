const Schema = require('mongoose').Schema;
const db1 = require('../DB/db')
const CateogrySchema = new Schema({
    Category:{type: String, required: true},
    parentId: String,
    cat: String
}); 

const CateogryModel = db1.model('caterogy',CateogrySchema);
module.exports =CateogryModel; 