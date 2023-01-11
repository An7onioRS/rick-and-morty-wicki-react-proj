import React from 'react'
import Gender from './Category/Genders'
import Status from './Category/Status'
import Species from './Category/Species'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  const clear = () => {
    setGender('')
    setSpecies('')
    setStatus('')
    setPageNumber(1)
    window.location.reload(false)
  }

  return (
    <div className="col-3">
      <div classNamee="text-center fw-bold fs-4 mb-2">Filter</div>
      <div 
        style={{ cursor: 'pointer' }} 
        className="text-center text-primary text-decoration-underline"
        onClick={clear} 
        >Clear Filters</div>
      
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  )
}

export default Filters