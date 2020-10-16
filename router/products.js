const express = require('express');
const router = express.Router();

const products = [
    {
        name: 'macbook',
        price: 100,
        image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
        name: 'Apple',
        price: 50,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
    }
]

router.get('/', (req, res) => {
    res.render('products', { products });
})
module.exports = router;
