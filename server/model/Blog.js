const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    date: String, // will change to Date
    category: [{ type: String }],
})

module.exports = mongoose.model("Blog", blogSchema);