import React from 'react'
import { useState } from 'react';

export default function HogTile({ name, image, weight, specialty, greased, highestMedal }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
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
    );
}
