import React,{ useState, useEffect } from 'react'
import { people } from './data'
import List from './List'; 










const App = () => {

  const [booking, setBooking] =useState(people); 
  return (
    <div class ="center">
      <h3> 
        <form>
          <input type='button'
           className='btn' 
           
           
          />
        </form>
      </h3>
      <List person = {booking}/>
    </div>
  )
}

export default App
