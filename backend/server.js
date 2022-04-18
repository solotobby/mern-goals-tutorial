const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
connectDB()

const app = express()

app.use(express.json()) //this handle the request bidy in controller
app.use(express.urlencoded({ extended: false})) //handles the urlencoded body

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => 
console.log(`Server started on port ${port}`)) 