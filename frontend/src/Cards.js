import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';

function Cards() {git 
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://media.npr.org/assets/img/2021/02/03/gettyimages-1036084450_custom-3197c5129ae148db1fcfbe61201029dadae0af25-s800-c85.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);

    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className='cards'>
            <div className='cards__cardContainer'>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards;