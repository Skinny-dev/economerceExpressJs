const express = require('express');
const router = express.Router();

const products = [
    {
        name: 'Apple',
        price: 100
    },
    {
        name: 'Banana',
        price: 50
    }
]

router.get('/', (req, res) => {
    res.render('products', { products });
})
module.exports = router;
