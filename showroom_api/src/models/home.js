const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    title:{
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
    }
})

const Home = mongoose.model('Home', homeSchema)

module.exports = Home
