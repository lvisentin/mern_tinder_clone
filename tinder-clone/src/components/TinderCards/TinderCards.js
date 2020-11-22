import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../../axios.js';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log(`removing: ${nameToDelete}`);
    }

    const outOfFrame = (person) => {
        removePerson(person);
    }
    
    const removePerson = (person) => {
        const findedPerson = people.filter((user) => person === user)[0];
        people.splice(people.indexOf(findedPerson), 1);
    }


    return (
        people ? 
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person)}
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
        </div> : 'test'
    )
}

export default TinderCards
