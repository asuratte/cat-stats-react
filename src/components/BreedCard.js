import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CheckLg } from 'react-bootstrap-icons';
import { XLg } from 'react-bootstrap-icons';

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
                    <div className="name">
                        <h3>{ breedsList[currentBreedNumber].name }</h3>
                    </div>
                    <div className="description">
                        <p>{ breedsList[currentBreedNumber].description }</p>
                    </div>
                    <div className="image">
                        <img src={ breedsList[currentBreedNumber].image.url } alt={ breedsList[currentBreedNumber].name } />
                    </div>
                    <div className="temperament">
                        <strong>Temperament</strong>
                        <p>{ breedsList[currentBreedNumber].temperament }</p>
                    </div>
                    <div className="origin">
                        <strong>Place of Origin</strong>
                        <p>{ breedsList[currentBreedNumber].origin }</p>
                    </div>
                    <div className="weight">
                        <strong>Weight</strong>
                        <p>{ breedsList[currentBreedNumber].weight.imperial } lbs</p>
                    </div>
                    <div className="attributes-points">
                        <ul>
                            <li>Affection +{ breedsList[currentBreedNumber].affection_level }</li>
                            <li>Energy +{ breedsList[currentBreedNumber].energy_level }</li>
                            <li>Vocalization +{ breedsList[currentBreedNumber].vocalisation }</li>
                            <li>Intelligence +{ breedsList[currentBreedNumber].intelligence }</li>
                            <li>Shedding +{ breedsList[currentBreedNumber].shedding_level }</li>
                            <li>Grooming +{ breedsList[currentBreedNumber].grooming }</li>
                            <li>Dog Friendly +{ breedsList[currentBreedNumber].dog_friendly }</li>
                            <li>Child Friendly +{ breedsList[currentBreedNumber].child_friendly }</li>
                        </ul>
                    </div>
                    <div className="attributes-yes-no">
                        <ul>
                            <li>
                                {
                                    (breedsList[currentBreedNumber].lap)
                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                    : <span className="attribute-icon no"><XLg /></span>
                                }
                             Lap Cat</li>
                        </ul>
                    </div>
                </div>
                <div class="button-wrap">
                    <Button onClick={getNext} className="btn btn-primary">Next</Button>
                </div>
            </div>
        )
    }
    
}

export default BreedCard