import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import './pagination.css'

const Pagination = ({ pageNumber, setPageNumber, info }) => {

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
    <> 
      <ReactPaginate 
        className='pagination justify-content-center gap-4 my-4'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1} 
        nextLabel='Next >' 
        previousLabel='< Prev'
        nextClassName='btn next' 
        previousClassName='btn prev' 
        pageClassName='page-item' 
        pageLinkClassName='page-link'
        marginPagesDisplayed={width < 576 ? 1 : 2} 
        pageRangeDisplayed={width < 576 ? 1 : 2} 
        activeClassName='active'
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.pages}
        />
    </>
  )   
}

export default Pagination   