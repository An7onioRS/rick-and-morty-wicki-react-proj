import React, { useState, useEffect } from 'react'

import './App.css'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'

const App = () => {

  const[status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [fetchedData, updateFetchedData] = useState([])
  let { info, results } = fetchedData 
  
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}` 

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

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">

          <Filters 
            setGender={setGender} 
            setStatus={setStatus} 
            setSpecies={setSpecies} 
            setPageNumber={setPageNumber} 
            />
          
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>  
          </div>

        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} results={results}/>
    </div>
  )
}

export default App