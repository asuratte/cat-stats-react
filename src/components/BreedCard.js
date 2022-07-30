import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CheckLg } from 'react-bootstrap-icons';
import { XLg } from 'react-bootstrap-icons';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

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

    const getRandom = () => {
        let randomNumber = Math.floor(Math.random() * breedsList.length)
        setCurrentBreedNumber(randomNumber)
    }

    const handleSelectionChange = event => {
        setCurrentBreedNumber(Number(event.target.value))
    };

    if (breedsList) {
        return (
            <div className="container">
                <div className="breeds-select text-center mb-4">
                    <strong>Select a Breed: </strong>
                    <select onChange={handleSelectionChange} name="breeds">
                        {breedsList.map((breed, index) => (
                            <option key={index} value={index}>
                                {breed.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="random-button-wrap text-center mb-4">
                        <Button onClick={getRandom} className="btn btn-primary">Get Random Breed</Button>
                </div>
                <div className="breed-card-wrapper d-flex justify-content-center">
                    <div className="prev-next-button-wrap">
                        <Button onClick={getPrevious} className="btn btn-primary">Previous</Button>
                    </div>
                    <div className="breed-card text-center mx-5">
                        <div className="name">
                        {
                                (breedsList[currentBreedNumber].name)
                                    ? <h3>{breedsList[currentBreedNumber].name}</h3>
                                    : <p>Name unavailable</p>
                            }
                        </div>
                        <div className="description">
                            {
                                (breedsList[currentBreedNumber].description)
                                    ? <p>{breedsList[currentBreedNumber].description}</p>
                                    : <p>Description unavailable</p>
                            }
                        </div>
                        <div className="image">
                            {
                                (breedsList[currentBreedNumber].image && breedsList[currentBreedNumber].image.url)
                                    ? <img src={breedsList[currentBreedNumber].image.url} alt={breedsList[currentBreedNumber].name} />
                                    : <img src="https://placekitten.com/300/500" alt={breedsList[currentBreedNumber].name} />
                            }
                        </div>
                        <div className="temperament">
                            <strong>Temperament</strong>
                            {
                                (breedsList[currentBreedNumber].temperament)
                                    ? <p>{breedsList[currentBreedNumber].temperament}</p>
                                    : <p>Temperament information unavailable</p>
                            }
                        </div>
                        <div className="origin">
                            <strong>Place of Origin</strong>
                            {
                                (breedsList[currentBreedNumber].origin)
                                    ? <p>{breedsList[currentBreedNumber].origin}</p>
                                    : <p>Origin information unavailable</p>
                            }
                        </div>
                        <div className="weight">
                            <strong>Weight</strong>
                            {
                                (breedsList[currentBreedNumber].weight && breedsList[currentBreedNumber].weight.imperial)
                                    ? <p>{breedsList[currentBreedNumber].weight.imperial} lbs</p>
                                    : <p>Weight information unavailable</p>
                            }
                        </div>
                        <div className="attributes-points">
                            <ul>
                                 {breedsList[currentBreedNumber].affection_level && <li>Affection +{breedsList[currentBreedNumber].affection_level}</li>}
                                 {breedsList[currentBreedNumber].energy_level && <li>Energy +{breedsList[currentBreedNumber].energy_level}</li>}
                                 {breedsList[currentBreedNumber].vocalisation && <li>Vocalization +{breedsList[currentBreedNumber].vocalisation}</li>}
                                 {breedsList[currentBreedNumber].intelligence && <li>Intelligence +{breedsList[currentBreedNumber].intelligence}</li>}
                                 {breedsList[currentBreedNumber].shedding_level && <li>Shedding +{breedsList[currentBreedNumber].shedding_level}</li>}
                                 {breedsList[currentBreedNumber].grooming && <li>Grooming +{breedsList[currentBreedNumber].grooming}</li>}
                                 {breedsList[currentBreedNumber].dog_friendly && <li>Dog Friendly +{breedsList[currentBreedNumber].dog_friendly}</li>}
                                 {breedsList[currentBreedNumber].child_friendly && <li>Child Friendly +{breedsList[currentBreedNumber].child_friendly}</li>}
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
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].rare)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Rare</li>
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].suppressed_tail)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Suppressed Tail</li>
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].short_legs)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Short Legs</li>
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].hypoallergenic)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Hypoallergenic</li>
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].experimental)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Experimental</li>
                                <li>
                                    {
                                        (breedsList[currentBreedNumber].natural)
                                            ? <span className="attribute-icon yes"><CheckLg /></span>
                                            : <span className="attribute-icon no"><XLg /></span>
                                    }
                                    Natural</li>
                            </ul>
                        </div>
                        {(breedsList[currentBreedNumber].wikipedia_url || breedsList[currentBreedNumber].vetstreet_url || breedsList[currentBreedNumber].vcahospitals_url) &&
                            <div className="learn-more">
                                <strong>Learn More</strong>
                                {breedsList[currentBreedNumber].wikipedia_url && <p><a className="link-primary" href={breedsList[currentBreedNumber].wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia</a> <BoxArrowUpRight /></p>}
                                {breedsList[currentBreedNumber].vetstreet_url && <p><a className="link-primary" href={breedsList[currentBreedNumber].vetstreet_url} target="_blank" rel="noopener noreferrer">Vetstreet</a> <BoxArrowUpRight /></p>}
                                {breedsList[currentBreedNumber].vcahospitals_url && <p><a className="link-primary" href={breedsList[currentBreedNumber].vcahospitals_url} target="_blank" rel="noopener noreferrer">VCA Animal Hospitals</a> <BoxArrowUpRight /></p>}
                            </div>
                        }
                    </div>
                    <div className="prev-next-button-wrap">
                        <Button onClick={getNext} className="btn btn-primary">Next</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default BreedCard