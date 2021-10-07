import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';



export const GifGrid = ({category}) => {
 const [Images, setImages] = useState([]);

  const {data, loading} = useFetchGifs(category);
  console.log(data,loading)  
  
  // useEffect(()=>{
    //   getGifs(category)
    //   .then(setImages);
    // },[category]) 
  

  return (
    <>
    {loading && 'Cargando...'}
    <h3>{category}</h3>

        { <div className="card-grid">
          
          
            {
              data.map((img) =>
               <GifGriditem 
               key={img.id}
               {...img}/>
              )
            }
          
        </div> }
        </>
    )
}
