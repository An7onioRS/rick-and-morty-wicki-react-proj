import React, { useState, useEffect} from 'react'

import './search.css'

const Search = ({ setSearch, setPageNumber }) => {

  const [width, setWidth] = useState(window.innerWidth)

  console.log(width)  

  const updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input 
          placeholder='Search for characters' 
          onChange={(e) => {
            setSearch(e.target.value)
            setPageNumber(1)
          }}
          type="text" 
          className="input" />
        <button 
          onClick={e => e.preventDefault()}  
          className="btn btn-primary fs-5">Search</button>
    </form>
  )
}

export default Search