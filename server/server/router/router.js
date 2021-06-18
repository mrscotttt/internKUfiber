const route = require('express').Router()
const controller = require("../controller/file.controller");
const Product = require('../model/product')
const Station = require('../model/station')
const Repair = require('../model/repair');
//const User = require('../model/User');
const Connect = require('../database/database');
const bodyparser = require('body-parser')
const passport = require('passport')
const products = [{}]
const station = [{}]
const repair = [{}]
const user = [{}]

//repair
route.get('/repair', async (req, res) => {
    const repair = await Repair.find({})
    res.json(repair)
})

route.post('/repair', async (req, res) => {
    const payload = req.body
    const repair = new Repair(payload)
    await repair.save()
    res.status(201).end()
})

route.delete('/repair/:id', async (req, res) => {
    const { id } = req.params
    await Repair.findByIdAndDelete(id)
    res.status(204).end()
})

//product
route.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

route.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
  })

route.post('/products', async (req, res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
  })
  
route.patch('/products/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, { $set: payload })
    res.json(product)
})
  
route.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(204).end()
})
  
//station
route.get('/station', async (req, res) => {
    const station = await Station.find({})
    res.json(station)
})

route.get('/station/:id', async (req, res) => {
    const { id } = req.params
    const station = await Station.findById(id)
    res.json(station)
  })

route.post('/station', async (req, res) => {
    const payload = req.body
    const station = new Station(payload)
    await station.save()
    res.status(201).end()
})
  
route.patch('/station/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params
    const station = await Station.findByIdAndUpdate(id, { $set: payload })
    res.json(station)
})
  

route.delete('/station/:id', async (req, res) => {
    const { id } = req.params
    await Station.findByIdAndDelete(id)
    res.status(204).end()
})

module.exports = route;
