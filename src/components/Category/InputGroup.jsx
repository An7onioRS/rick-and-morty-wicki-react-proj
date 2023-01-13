import React from 'react'

const InputGroup = ({ total, setID, type }) => {
    const items = ([...Array(total).keys()])
    return (
        <div class="input-group mb-3">
            <select 
                onChange={(e) => {
                    setID(e.target.value)
                }}
                class="form-select" 
                id="Location">

                <option value='1' selected>Choose...</option>
                {
                    items.map(item => {
                        return (
                            <option value={item + 1}>{type} {item + 1}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default InputGroup   