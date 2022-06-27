const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    date: String, // will change to Date
    categories: {
        cloud: Boolean,
        phone: Boolean
    }
})

module.exports = mongoose.model("Blog", blogSchema);