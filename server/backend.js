const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

app.use(express.json)
const cors = require("cors")
app.use(cors)


const mongoURL = "mongodb+srv://dhruvanandsingh2004:7392853770@ricobyter.56hvkwl.mongodb.net/chat-app?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser :true,
}).then(() => {
    console.log("Connected to Databse");
}).catch((e) => console.log(e))

//building a schema
require('./imageDetails');

const Images = mongoose.model("Images");

app.get("/", async(req,res) => {
    res.send("Success!!!");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
