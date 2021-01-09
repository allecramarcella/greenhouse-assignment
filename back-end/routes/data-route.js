const express = require('express')
const router  = express.Router()
const Tomatoes = require('../models/Tomatoes-model')

router.get('/tomatoes', (req, res) => {
    Tomatoes.find().populate('production')
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"Something went wrong"})
    }) 
}) 




module.exports = router