const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    image:String
})
const PRODUCT = mongoose.model('Product', productSchema)

module.exports = PRODUCT