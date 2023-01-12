import React from 'react'

import Cards from '../Cards/Cards'
import InputGroup from '../Category/InputGroup'
import { useState, useEffect } from 'react'

const Episodes = () => {

  const [id, setID] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [results, setResults] = useState([])

  const { air_date, name } = fetchedData  
  const api_episodes = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async () => {
      const data = await fetch(api_episodes).then(res => res.json())
      setFetchedData(data)

      let chars = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then(res => res.json())
        })
      )
      setResults(chars)
    })()
  }, [api_episodes])


  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode: {' '} 
          <span className="text-primary">
            {name ? name : 'No name was found for this episode'}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date: {' '} {air_date ? air_date : 'No air date was found for this episode'}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">
            Pick Episodes
          </h4>
          <InputGroup setID={setID} total={51}/>
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

export default Episodes