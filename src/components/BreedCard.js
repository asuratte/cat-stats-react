import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
            <div className="breed-card-wrapper d-flex justify-content-center">
                <div class="button-wrap">
                    <Button onClick={getPrevious} className="btn btn-primary">Previous</Button>
                </div>
                    <div className="breed-card text-center mx-5">
                        <h3>{ breedsList[currentBreedNumber].name }</h3>
                        <p>{ breedsList[currentBreedNumber].description }</p>
                    </div>
                <div class="button-wrap">
                    <Button onClick={getNext} className="btn btn-primary">Next</Button>
                </div>
            </div>
        )
    }
    
}

export default BreedCard