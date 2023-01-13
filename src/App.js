import React, { useState, useEffect } from 'react'

import './App.css'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
import Navbar from './components/Navbar/Navbar'
import Episodes from './components/Pages/Episodes'
import Location from './components/Pages/Locations'
import CardDetails from './components/Cards/CardDetails'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<CardDetails />}/>

        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/episodes/:id' element={<CardDetails />}/>

        <Route path='/location' element={<Location />}/>
        <Route path='/location/:id' element={<CardDetails />}/>
      </Routes>

    </Router>
  )
}

const Home = () => {

  const[status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  let { info, results } = fetchedData 
  
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}` 

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()
  }, [api]) 

  return (
    <div className="App">

      <h1 className="text-center mb-4">Characters</h1>
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
              <Cards page="/" results={results}/>
            </div>  
          </div>

        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} results={results}/>
    </div>
  )
}

export default App