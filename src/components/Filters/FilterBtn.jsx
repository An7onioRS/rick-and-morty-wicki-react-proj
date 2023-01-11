import React from 'react'

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
        <style jsx>
            {`
                input[type='radio']{
                    display: none;
                }

                .form-check-input:checked + label {
                    background: #0b5ed7;
                    color: #fff;
                }
            `}
        </style>
        <div className="form-check">
            <input 
                onClick={() => {
                  setPageNumber(1)  
                  task(item) 
                }}
                className="form-check-input" 
                type="radio" 
                name={name} 
                id={`${name}-${index}`} />
            <label 
                className="btn btn-outline-primary" 
                htmlFor={`${name}-${index}`}>
                    {item}
            </label>
        </div>
    </div>
  )
}

export default FilterBtn