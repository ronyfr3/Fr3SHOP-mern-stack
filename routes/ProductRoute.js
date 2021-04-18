const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/ProductContoller')
const router = require('express').Router()

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports=router