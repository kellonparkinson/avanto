const express = require('express')
const cors = require('cors')
const db = require('./database')
const { Car, Photo, User, Inquiry } = require('./models')
const seed = require('./seed')

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


db
    .sync()
    .then(seed())
server.listen(4000, () => console.log('Listening on 4000'))