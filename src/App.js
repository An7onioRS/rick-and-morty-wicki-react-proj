import React, { useState, useEffect } from 'react'

import './App.css'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'

const App = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, updateFetchedData] = useState([]) 
  let { info, results } = fetchedData 
  
  console.log(results)
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}` 

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data)
    })()
  }, [api]) 

  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4'>
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>

      <div className="container">
        <div className="row">

          <div className="col-3">
            <Filters />
          </div>
          
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>  
          </div>

        </div>
      </div>
    </div>
  )
}

export default App