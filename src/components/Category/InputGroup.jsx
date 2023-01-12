import React from 'react'

const InputGroup = ({ total, setID }) => {
    const items = ([...Array(total).keys()])
  return (
    <div class="input-group mb-3">
        <select 
            onChange={(e) => {
                setID(e.target.value)
            }}
            class="form-select" 
            id="Episode">
            {
                items.map(item => {
                    return (
                        <option value={item}>Episode {item}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default InputGroup   