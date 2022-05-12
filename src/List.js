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
 

import React from 'react'

const List = ({person}) => {
  return (
    <div>
      {person.map((item)=>{
        const {id, image, name, title, quote} = item; 
        return <article key = {id}> 
        <h3>{name}</h3>
        <img src={image} alt={name} className= "person-img"/>
        <p>{title}</p>
        <h4>{quote}</h4>
        </article>
      })}

    </div>
  )
}

export default List
