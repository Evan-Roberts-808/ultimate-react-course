import React from 'react'
import Item from './Item'
function PackingList() {

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    ];

  return (
    <div className='list'>
    <ul>
        {initialItems.map((item) => <Item item={item} key={item.id}/>)}
    </ul>
    </div>
  )
}

export default PackingList