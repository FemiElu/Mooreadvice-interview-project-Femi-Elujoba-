import React,{ useState, useEffect } from 'react'
import { pet } from './data'
import List from './List'; 










const App = () => {

  const [booking, setBooking] =useState(pet); 
  return (
    <div class ="center">

      <div>
        <h2> We welcome you to Zoopha Pet Store</h2>
        <hr/>
      </div>
      <h3> 
        <button className='btn'>Click to meet</button>
      </h3>
      <List person = {booking}/>
    </div>
  )
}

export default App
