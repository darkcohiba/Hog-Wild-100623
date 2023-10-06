import React, { useState } from 'react'

function HogTile({ name, image, weight, greased, special, highestMedal}) {

    const [isClicked, setIsclicked] =useState(false)

    function handleDetails(){
        setIsclicked(!isClicked)
    }
  return (
    <div>
        <div onClick={handleDetails}className='pigTile'>
            <h3>{name}</h3>
            <img width={250} src={image}></img>
            {isClicked ? <div>
                <p>Weight: {weight}</p>
                <p>Specialty: {special}</p>
                <p>Highest Medal Achieved: {highestMedal}</p>
                <p>{greased? "Greased" : "Not Greased"}</p>
            </div>
            :
            null
            }

        </div>
    </div>
  )
}

export default HogTile
