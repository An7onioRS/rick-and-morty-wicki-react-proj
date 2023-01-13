import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const { id } = useParams()  
    const api = `https://rickandmortyapi.com/api/character/${id}`
    const [fetchedData, setFetchedData] = useState([])

    const { name, image, origin, location, gender, species, status, type } = fetchedData
    
    useEffect(() => {
        (async () => {
          let data = await fetch(api).then(res => res.json())
          setFetchedData(data)
        })()
      }, [api])


    return (
        <div className="container d-flex justify-content-center">
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'>{name}</h1>
                <img src={image} alt='' className='img-fluid'></img>
                {(() => {
                    if (status === 'Dead') {
                        return <div className="badge bg-danger fs-5">{status}</div>
                    } else if (status === 'Alive') {
                        return <div className="badge bg-success fs-5">{status}</div>
                    } else {
                        return <div className="badge bg-secondary fs-5">{status}</div>
                    }
                })()}
                <div className='content'> 
                    <div className="">
                        <span className='fw-bold'>Gender: </span>{gender}
                    </div>
                        <div>
                            <span className='fw-bold'>Location: </span>{location?.name ? location?.name : 'No location'}
                        </div>
                        <div>
                            <span className='fw-bold'>Species: </span>{species ? species : 'No species'}
                        </div>
                        <div>
                            <span className='fw-bold'>Origin: </span>{origin?.name ? origin?.name : 'No origin'}
                        </div>
                </div>
            </div>
        </div>
  )
}

export default CardDetails