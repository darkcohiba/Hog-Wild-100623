import React, { useState } from 'react'
import HogTile from './HogTile'
import HogFilter from './HogFilter'

export default function HogList({hogs}) {
    // state and filter function for greased
    const [currentCategory, setCurrentCategory] = useState("All")
    const [sortBy, setSortBy] = useState("Name")

    const onSelectCategory = (option) => {
        console.log(option)
        setCurrentCategory(option)
    }

    const onSetSort = (option) => {
        setSortBy(option)
    }

    const greasedHogs = hogs.filter((hog)=>{
        if (currentCategory === "All") {
            return true
        }else if (currentCategory === "Greased") {
            return hog.greased
        }else{
            return !hog.greased
        }
    }).sort((hog1, hog2) => {
        if (sortBy === "weight") {
            return hog1.weight - hog2.weight;
        } else {
            return hog1.name.localeCompare(hog2.name);
        }
    });

    console.log(greasedHogs)

    // const sortedHogs = greasedHogs.sort((hog1, hog2) => {
    //     if (sortBy === "weight") {
    //         return hog1.weight - hog2.weight;
    //     } else {
    //         return hog1.name.localeCompare(hog2.name);
    //     }
    //   });


    const hogCards = greasedHogs.map((hog)=>{
        return(
            <HogTile
                key={hog.name}
                name={hog.name}
                image={hog.image}
                weight={hog.weight}
                greased={hog.greased}
                specialty={hog.specialty}
                highestMedal={hog["highest medal achieved"]}
            />
        )
})
    return (
        <div>
            <HogFilter setCat={onSelectCategory} setSort={onSetSort} />
            {hogCards}
        </div>
    )
}
