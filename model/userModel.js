const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Your name must be included']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'your email must be unique']
    },
    postal_code:{
        type: Number,
        maxlength: 6,
        minlength: 6,
        required: [true, 'you must have to enter pin code']
    }
});

const testing = mongoose.model("testing", userSchema);

module.exports = testing;