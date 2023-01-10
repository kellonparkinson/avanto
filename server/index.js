const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')

const { Car, Photo, User, Inquiry } = require('./models')
const { getAllCars } = require('./controllers/car')

const server = express()
server.use(express.json())
server.use(cors())

// Database
Car.hasMany(Photo)
Photo.belongsTo(Car)

User.hasMany(Inquiry)
Inquiry.belongsTo(User)

Car.hasMany(Inquiry)
Inquiry.belongsTo(Car)

// Endpoints
server.get('/api/allCars', getAllCars)


// db
    // .sync({force: true})
    // .then(() => seed())
server.listen(4000, () => console.log('Listening on 4000'))