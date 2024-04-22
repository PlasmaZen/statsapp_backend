const express = require('express')
const router = express.Router()
module.exports = router

// Get All
router.get('/', (req, res) => {

})

// Get One
router.get('/:id', (req, res) => {
    req.param.id
})