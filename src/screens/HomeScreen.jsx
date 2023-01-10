import React, { useSate, useEffect } from 'react'
import CarCard from '../components/CarCard'
import axios from 'axios'

const HomeScreen = () => {
  const [cars, setCars] = useSate([])

  const getData = () => {
    axios
      .get('/api/allCars')
      .then((res) => {
        setCars(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const carDisplay = cars.map((car, index) => {
    return <CarCard car={car} />
  })

  return (
    <div className='main-page'>
      <h1>Home</h1>
      {carDisplay}
    </div>
  )
}

export default HomeScreen