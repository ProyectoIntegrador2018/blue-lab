const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    title_descr_1: {
        type: String,
        required: true,
    },
    descr_1:{
        type: String,
        required: true,
    },
    title_descr_2: {
        type: String,
    },
    descr_2:{
        type: String,
    },
    title_descr_3: {
        type: String,
    },
    descr_3:{
        type: String,
    },
    title_cont_1:{
        type: String
    },
    cont_1:{
        type: Number
    },
    title_cont_2:{
        type: String
    },
    cont_2:{
        type: Number
    },
    img_principal:{
        type: String,
        required: true
    },
    img_feature:{
        type: String,
        required: true
    },
    imgs_attached:{
        type: [String]
    },
    links: {
        type: [String]
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
