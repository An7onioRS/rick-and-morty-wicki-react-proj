import React from 'react'

import Cards from '../Cards/Cards'
import InputGroup from '../Category/InputGroup'
import { useState, useEffect } from 'react'

const Location = () => {

  const [id, setID] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [results, setResults] = useState([])

  const { name, type, dimension } = fetchedData  
  const api_episodes = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async () => {
      const data = await fetch(api_episodes).then(res => res.json())
      setFetchedData(data)

      let locations = await Promise.all(
        data.residents.map((char) => {
          return fetch(char).then(res => res.json())
        })
      )
      setResults(locations)
    })()
  }, [api_episodes])


  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location: {' '} 
          <span className="text-primary">
            {name ? name : 'No name was found for this episode'}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension ? dimension : 'No dimension was found for this episode'}
        </h5>
        <h6 className="text-center">
          Type: {type ? type : 'No type was found for this episode'}
        </h6>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">
            Pick Location
          </h4>
          <InputGroup setID={setID} total={126}/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location