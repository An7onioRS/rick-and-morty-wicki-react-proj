import React from 'react'

import './cards.css'

const Cards = ({ results }) => {

  let display
  
  if (results) {
    display = results.map(char => {
      let { id, name, image, location, status } = char
      return (   
        <div key={id} className='col-4 mb-4 position-relative'>
          <div className="card">
            <img src={image} alt="" className="img-fluid img" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === 'Dead') {
                 return <div className="position-absolute badge bg-danger">{status}</div>
              } else if (status === 'Alive') {
                return <div className="position-absolute badge bg-success">{status}</div>
              } else {
                return <div className="position-absolute badge bg-secondary">{status}</div>
              }
            })()}
          </div>
        </div>
      )
    })
  } else {
    display = 'No more Rick and Morty characters exist.'
  }

  return <>{display}</>
}

export default Cards