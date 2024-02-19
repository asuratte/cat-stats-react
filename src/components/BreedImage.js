import React, { useState, useEffect } from 'react';

const BreedImage = (props) => {
    const { breedsList, currentBreedNumber } = props;
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const getBreedImageUrl = (breedId) => {
            fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        setImageUrl(data[0].url);
                    } else {
                        console.error('No image found for breed:', breedId);
                    }
                })
                .catch(error => {
                    console.error('Error fetching image:', error);
                });
        };

        getBreedImageUrl(breedsList[currentBreedNumber].id);
    }, [breedsList, currentBreedNumber]);

    return (
        <div className="image section-wrapper">
            {imageUrl ? (
                <img src={imageUrl} alt={breedsList[currentBreedNumber].name} />
            ) : (
                <img src="https://placekitten.com/300/500" alt={breedsList[currentBreedNumber].name} />
            )}
        </div>
    );
};

export default BreedImage;