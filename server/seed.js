const { Car, Photo } = require('./models')

let cars = [
    {
      make: "Lamborghini",
      model: "Huracan",
      year: 2020,
      price: 1234567,
      description: "A modern spin on a classic Lamborghini, the Huracan EVO Spyder is an exotic masterpiece."
    },
    {
      make: "Rolls Royce",
      model: "Wraith",
      year: 2018,
      price: 1234567,
      description: "Rolls royce has done it again with their Wraith. Nothing says true class and dignity like a Rolls Royce."
    }
  ]
  
let photos = [
    {
      carId: 1,
      url: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      primaryPhoto: true
    },
    {
      carId: 2,
      url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      primaryPhoto: true
    }
]

const seed = async () => {
    await Car.bulkCreate(cars)
    await Photo.bulkCreate(photos)

    console.log('SEED COMPLETE')
}

module.exports = seed