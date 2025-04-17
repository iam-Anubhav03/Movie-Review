const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    MovieName: {
        type: String,
        required: true,
       
    },
    Comment: {
        type: String,
        required: true,
       
    },
    Rating: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;