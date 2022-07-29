import { useState } from 'react';
import axios from 'axios';

const NextButton = () => {
    const [currentBreed, setCurrentBreed] = useState(0);

    const getNext = () => {
        setCurrentBreed(currentBreed + 1);
        const options = {
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/breeds',
            params: {limit: 1, page: currentBreed}
        };
        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <button onClick={getNext}>Next</button>
    )
}

export default NextButton