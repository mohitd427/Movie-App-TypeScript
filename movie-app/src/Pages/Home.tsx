import axios from 'axios';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'

interface movies {
    Title: string,
    Year: string,
 Rated:string   
}
// let response: AxiosResponse<TodoType[]> = await axios.get('http://localhost:8080/todo')
async function getMovies() {
    let response: AxiosResponse<movies[]> = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=818a7628`)
        
    return response
    
}
const Home = () => {
    const [movies, setMovies] = useState<movies[]>([]);


    useEffect(() => {       
    getMovies().then((res)=>console.log(res.data))
     
    }, [])
    
  return (
      <div>
          

    </div>
  )
}

export default Home