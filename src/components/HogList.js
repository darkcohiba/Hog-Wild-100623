import React, { useState } from 'react'
import HogTile from './HogTile'
import HogFilter from './HogFilter'


function HogList({hogs}) {
// console.log(hogs)
  const [currentCat, setCurrentCat] = useState("All")
  const [sortBy, setSortBy] = useState("name")


  const onSetCategory = (newOption) => {
    console.log(newOption)
    setCurrentCat(newOption)
  }

  const onSetSort=(newOption)=>{
    console.log(newOption)
    setSortBy(newOption)
  }

  const greasedHogs = hogs.filter((hog)=>{
    // filter case 1 is all, case 2 is greased,case 3 is not greased
    if (currentCat === "All"){
      return true
    }else if (currentCat === "Greased"){
      return hog.greased
    }else{
      return !hog.greased
    }
  }).sort((hog1, hog2)=>{
    if (sortBy === "weight"){
      return hog1.weight - hog2.weight;
    } else{
      return hog1.name.localeCompare(hog2.name)
    }
  })




  const hogCards = greasedHogs.map((hog) => {
      // console.log(hog)
      return(
          <HogTile 
              key={hog.name}
              name={hog.name}
              image={hog.image}
              weight={hog.weight}
              greased={hog.greased}
              special={hog.specialty}
              highestMedal={hog["highest medal achieved"]}
          />
      )
  })
    return (
      <div>
          <HogFilter onSetCategory={onSetCategory} onSetSort={onSetSort}/>
          {hogCards}
      </div>
    )
}

export default HogList