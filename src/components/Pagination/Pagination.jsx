import React from 'react'

import './pagination.css'

const Pagination = ({ pageNumber, setPageNumber, info }) => {
    console.log(pageNumber)    
    const next = (info) => {
            setPageNumber(x => x + 1)
    }

    const prev = () => {
        if (pageNumber === 1) return
        setPageNumber(x => x - 1)
    }

  return (
    <div className='container'>
        return (
            <div className='container d-flex justify-content-center'>
            <button onClick={prev} className="btn btn-primary">Previous</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
        )
    </div>
  )
}

export default Pagination   