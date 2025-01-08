const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    image: String,
nameprice: Number,
discount:{
    type: Number,
    default: 0
},
bgcolor: String,
panelcolor: String,
textcolor: String,

});

module.exports = mongoose.model("product", productSchema);