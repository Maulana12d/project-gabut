const mongoose = require('mongoose');


const Contact = mongoose.model('user', {
    nama:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
})

module.exports = Contact;