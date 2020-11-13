import React, { useState, useRef } from 'react';
import Card from './Card';
import Cards from './image_data';
import Navbar from './Navbar';

const Container = () => {
    const [currentScore, changeScore] = useState(0);
    const [bestScore, changeBestScore] = useState(0);
    const [cards, setCards] = useState(() => shuffleCards(Cards));

    //function to shuffle an array randomly
    function shuffleCards(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleClick(e){
        if(e.clicked){
            zeroCurrentScore()
            cards.map(card => card.clicked = false)
        }
        else{
            increaseCurrentScore()
            e.clicked = true;
        }
        setCards(shuffleCards(cards))
    }
    
    function increaseCurrentScore(){
        changeScore(currentScore+1);
        increaseBestScore();
    }

    function increaseBestScore(){
        if (currentScore >= bestScore){
            changeBestScore(bestScore+1);
        }
    }

    function zeroCurrentScore(){
        changeScore(0);
    }

    const cardArray = cards.map((card) => {
            return (
                <Card 
                    source={card.src} 
                    key={card.id} 
                    name={card.name} 
                    click={() => handleClick(card)}
                />
            )
        })
    
    return ( 
        <div className="container">
            <Navbar currentScore={currentScore} bestScore={bestScore} />
            <div className="cards">
                {cardArray}
            </div>
        </div>
    )
}

export default Container