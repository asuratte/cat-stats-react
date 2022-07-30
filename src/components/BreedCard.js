import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BreedCard = () => {

    const [breedsList, setBreedsList] = useState(null);
    const [currentBreedNumber, setCurrentBreedNumber] = useState(0);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/breeds'
        };
        axios.request(options).then((response) => {
            setBreedsList(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);

    const getNext = () => {
        if (currentBreedNumber < (breedsList.length - 1)) {
            setCurrentBreedNumber(currentBreedNumber + 1)
        }
    }

    const getPrevious = () => {
        if (currentBreedNumber > 0) {
            setCurrentBreedNumber(currentBreedNumber - 1)
        }
    }

    if (breedsList) {
        return (
            <div className="breed-card-wrapper">
                <div className="breed-card">
                    <h3>{ breedsList[currentBreedNumber].name }</h3>
                    <p>{ breedsList[currentBreedNumber].description }</p>
                </div>
                <button onClick={getPrevious}>Previous</button>
                <button onClick={getNext}>Next</button>
            </div>
        )
    }
    
}

export default BreedCard