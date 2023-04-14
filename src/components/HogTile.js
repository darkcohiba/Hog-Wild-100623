import React from 'react'
import { useState } from 'react';

export default function HogTile({ name, image, weight, specialty, greased, highestMedal }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleClickVisible = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            {/* <button  onClick={handleClickVisible} >Click to View</button> */}
            {isVisible &&
            <div onClick={handleClick} className="pigTile">
                <h3>{name}</h3>
                <img width={250} src={image}></img>
                {isClicked ? (
                    <div>
                        <p>Weight: {weight}</p>
                        <p>Specialties: {specialty}</p>
                        <p>Highest medal achieved: {highestMedal}</p>
                        <p>{greased ? "Greased" : ""}</p>
                    </div>
                ) : null}
                {isClicked && (
                    <div>
                        <p>Weight: {weight}</p>
                        <p>Specialties: {specialty}</p>
                        <p>Highest medal achieved: {highestMedal}</p>
                        <p>{greased ? "Greased" : ""}</p>
                    </div>
                )}
            </div>
            }
        </div>
    );
}
