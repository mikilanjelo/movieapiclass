import React, {useContext, useEffect} from 'react'
import { MovieContext } from '../MovieContext'
import Item from './Item'
// 41d05c2d76e7a041dd82838129f0669f
const imgPath='https://image.tmdb.org/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg'
const url = 'https://api.themoviedb.org/3/'
const key='movie?api_key=41d05c2d76e7a041dd82838129f0669f&query='
const List = () => {
    const {movie, setMovie, searchKey, setSelected}=useContext(MovieContext)
  useEffect(() =>{
    const filmMovie= async ()=> {
        const type = searchKey ? 'search':'discover'
        const response = await fetch(`${url}${type}/${key}${searchKey}`)
        const data= await response.json()
        console.log(data.results)
        setMovie(data.results)
        setSelected(data.results[0])
    }
    filmMovie()
  }, [searchKey, setMovie, setSelected])

  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {movie.map((film, index)=>(
            <Item key={index++} film={film} />
        ))}
    </div>
  )
}

export default List 