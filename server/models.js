const { DataTypes } = require('sequelize')
const db = require('./database')

const Car = db.define('car', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING({ length: 500 }),
})

const Photo = db.define('photo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    url: DataTypes.STRING({ length: 500 }),
    primaryPhoto: DataTypes.BOOLEAN
})

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: DataTypes.STRING({ length: 20 }),
    password: DataTypes.STRING({ length: 300 }),
    admin: DataTypes.BOOLEAN
})

const Inquiry = db.define('inquiry', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    reason: DataTypes.STRING({ length: 1000 })
})

module.exports = {
    Car,
    Photo,
    User,
    Inquiry
}