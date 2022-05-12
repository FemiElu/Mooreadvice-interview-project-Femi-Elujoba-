// import React from 'react'

// const List = ({sample}) => {

   
//   return (
//     <div>
//        {sample.map((item)=>{
//          const { id, image, title, author} = item; 
//          return   <div key={id}>
//                 <h2>{title}</h2>
//                 <p> <img src={image} alt = {title}/> </p>
//                 <h3>{author}</h3>
//          </div>
//        })} 
//     </div>
//   )
// }

// export default List
 

import React,{ useState } from 'react'; 
import { pet } from './data'

const List = ({person}) => {

const [item, setItem] = useState(pet)

  const selectPet = () => {
    if (pet.id){
      return (pet.name)
    }

    
  }
  return (
    <div>
      {person.map((item)=>{
        const {id, image, name,price} = item; 
        return <article key = {id}> 
        <h3>{name}</h3>
        <img src={image} alt={name} className= "person-img"/>
        <h4>{price}</h4>
        <button className='btn-2'>Click to meet {selectPet} </button>
        </article>
      })}

    </div>
  )
}

export default List
