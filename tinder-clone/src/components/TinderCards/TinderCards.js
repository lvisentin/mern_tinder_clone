import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://c.files.bbci.co.uk/5C64/production/_115525632_elonmusk.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris iaculis purus pulvinar commodo ac sit amet neque. Maecenas non varius massa.',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://f.i.uol.com.br/fotografia/2019/08/01/15646804835d432123c19bd_1564680483_3x2_md.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris iaculis purus pulvinar commodo ac sit amet neque. Maecenas non varius massa.',
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log(`removing: ${nameToDelete}`);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(`name: ${name} left the screen`);
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                            <h4>{person.description}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
