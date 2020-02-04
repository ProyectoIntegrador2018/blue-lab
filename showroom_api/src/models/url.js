const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    extension:{
        type: String,
        required: true
    },
    navbar:{
        type: [String],
        required: true
    },
    title_cont_1:{
        type: String,
        required: true
    },
    cont_1:{
        type: Number,
        required: true
    },
    title_cont_2:{
        type: String,
        required: true
    },
    cont_2:{
        type: Number,
        required: true
    },
    title_cont_3:{
        type: String,
        required: true
    },
    cont_3:{
        type: Number,
        required: true
    },
    item_1:{
        type: String,
        required: true
    },
    item_2:{
        type: String,
        required: true
    },
    item_3:{
        type: String,
        required: true
    },
    hidden_items:{
        type: [String]
    },
    contact_name:{
        type: String
    },
    contact_phone:{
        type: String
    },
    contact_email:{
        type: String
    },
    contact_pic:{
        type: String
    }
})

const Url = mongoose.model('Url', urlSchema)

module.exports = Url
