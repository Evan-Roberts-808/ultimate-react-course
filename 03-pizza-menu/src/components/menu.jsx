import React from 'react'
import Pizza from './pizza'
import pizzaData from '../../data'


function menu() {
  
  return (
    <main className='menu'>
        <h2>menu</h2>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <ul className='pizzas'>
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />
          })}
        </ul>
    </main>
  )
}

export default menu