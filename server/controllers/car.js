const { Car, Photo } = require('../models')

module.exports = {
    getAllCars: async (req, res) => {
        try {
            let cars = await Car.findAll({
                include: [Photo]
            })

            res.status(200).send(cars)
        } catch (err) {
            res.status(400).send(err)
        }
    },
}