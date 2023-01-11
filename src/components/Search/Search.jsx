import React from 'react'

import './search.css'

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
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