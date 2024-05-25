import React from 'react'

function footer() {
    const hour = new Date().getHours
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

  return (
    <>
    {isOpen ? 
    (
      <footer className='footer'>
      <div className='order'>
        <p>{new Date().toLocaleTimeString()} We're currently open</p>
        <button className='btn'>Order</button>
      </div>
      </footer>
    ) 
    : 
    (<footer className='footer'>{new Date().toLocaleTimeString()} We're currently closed</footer>)
    }
    </>
  )
}

export default footer