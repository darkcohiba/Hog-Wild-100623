import React from 'react'

export default function HogFilter({setCat, setSort}) {
    function handleSelectGre(e){
        console.log(e.target.value)
        setCat(e.target.value);
    }

    function handleSelectSort(e){
        setSort(e.target.value);
    }

    return (
        <div>
            <select onChange={handleSelectGre}>
            {/* <select onClick={handleSelect}> */}
                <option value="All">All</option>
                <option value="Not Greased">Not greased</option>
                <option value="Greased">Greased</option>
            </select>
            <select onChange={handleSelectSort}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            
        </div>
    );
}
