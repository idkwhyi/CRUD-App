const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const app = express()
const productRoutes = require('./routes/product.route.js')

// middleware
app.use(express.json())
app.use(express.urlencoded({extends: false}))

// routes
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
  res.send("Hello from Node API");
});

mongoose.connect('mongodb+srv://admin:YCDIZsxajZMhydQT@backenddb.qsofe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log("Server is running on port 3000")
    });
  })
  .catch(() => {
    console.log("Connection failed")
  })

// mongodb+srv://admin:<db_password>@backenddb.qsofe.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB