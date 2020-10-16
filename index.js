const express = require('express');
const path = require('path');
const productRouter = require('./router/products');
const app = express();

app.use("/static", express.static(path.join(__dirname,"public")));
app.set("views", path.join(__dirname, "views"));
//establecer pug 
app.set("view engine", "pug");

app.use('/products', productRouter);

const server = app.listen(3000, function() {
    console.log(` Listening at http://localhost:3000:${server.address().port}`)   
})