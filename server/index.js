const express = require('express');
const next = require('next');
require('dotenv').config();
const bodyParser  = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./model/Blog');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    mongoose.connect(process.env.MD_ATLAS, {dbName: process.env.DB_NAME}, {useNewUrlParser : true});
    mongoose.connection.once('open', () => {
        console.log('MongoDB connection established');
    });


    server.use(express.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.post("/", async (req, res) => {

        const title = req.body.title;
        const category = req.body.category;
        const date = req.body.date;

        const blog = new Blog({title: title, category: category, date: date});
        try {
            await blog.save();
            console.log("success");
            res.redirect(307, '/test');
        }catch (err) {
            console.log(err);
        }
    });
    server.get("/getall", async (req, res) => {
        try {
            const all = await Blog.find({category: ["cloud"]});
            console.log(all);
            res.json(all);
        }catch (err) {
            console.log(err);
        }

    })

    server.delete("/del", async (req, res) => {
        try {
            const blog =  await Blog.deleteMany({ hairColor: "brown"});
            console.log("deleted");
            res.end();
        }catch (err) {
            console.log(err);
        }
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    });


    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(`> Error: ${err}`);
    process.exit(1);
});