const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../model/Blog');

router.get("/test", (req, res) => {
    res.status(200).json({
        message: "all good"
    });
});

router.post("/create", async (req, res) => {

    const newBlog = new Blog({
        title: "test",
        date: "today",
        categories: {
            cloud: true,
            phone: false
        },
        number: 1
    });
    try {
        await newBlog.save();
        res.status(200).json(newBlog);
    }catch (err) {
        console.log(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await Blog.deleteOne({ number: id });
        console.log(blog);
    }catch(err) {
        console.log(err);
    }
});



module.exports = {
    router : router
};