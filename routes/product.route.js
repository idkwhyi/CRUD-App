const express = require("express")
const Product = require('../models/product.model')
const router = express.Router()
const { 
  getProducts, 
  getProduct, 
  addProduct, 
  updateProduct ,
  deleteProduct
} = require('../controllers/product.controller.js')

// get all  product
router.get('/', getProducts);
// get product by id
router.get('/:id', getProduct)
// add new product
router.post('/', addProduct)
// update product
router.put('/:id', updateProduct)
// delete product
router.delete('/:id', deleteProduct)



module.exports = router;