//We will show all the books here in the homepage

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
  
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const fetchAllBooks = async () =>{
      try{
        const res = axios.get("")

      }catch(err){

      }
    }
  })

  return (
    <div>Books</div>
  )
}

export default Books