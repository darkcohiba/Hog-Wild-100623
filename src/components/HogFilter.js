import React from 'react'

function HogFilter({onSetCategory, onSetSort}) {
    function handleCatChange(e){
        onSetCategory(e.target.value)
    }

    function handleSortChange(e){
        onSetSort(e.target.value)
    }
  return (
    <div>
        <select onChange={handleCatChange}>
            <option value="All">All</option>
            <option value="Not Greased">Not Greased</option>
            <option value="Greased">Greased</option>
        </select>
        <select onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    </div>
  )
}

export default HogFilter