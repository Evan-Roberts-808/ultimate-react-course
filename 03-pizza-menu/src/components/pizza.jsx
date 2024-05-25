import React from 'react'

function pizza({pizzaObj}) {

  console.log(pizzaObj)
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} />
        <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
        </div>
    </li>
  )
}

export default pizza