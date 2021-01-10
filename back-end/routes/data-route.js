const express = require('express')
const router  = express.Router()
const Tomatoes = require('../models/Tomatoes-model')
const Production = require('../models/Production-model')
const Environment = require('../models/Environment-model')
const Soil = require('../models/Soil-model')

router.get('/tomatoes', (req, res) => {
    Tomatoes.find()
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"Something went wrong"})
    }) 
}) 

router.get('/production', (req, res) => {
    Production.find()
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"Something went wrong"})
    }) 
}) 

router.get('/environment', (req, res) => {
    Environment.find()
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"Something went wrong"})
    }) 
}) 

router.get('/soil', (req, res) => {
    Soil.find()
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