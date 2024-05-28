import React from 'react'

function Item({item}) {
  return (
    <li>
    <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
    {item.quantity} {item.description}
    </span>
    <button>X</button>
    </li>
  )
}

export default Item