const BreedImage = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="image section-wrapper">
            {
                (breedsList[currentBreedNumber].image && breedsList[currentBreedNumber].image.url)
                    ? <img src={breedsList[currentBreedNumber].image.url} alt={breedsList[currentBreedNumber].name} />
                    : <img src="https://placekitten.com/300/500" alt={breedsList[currentBreedNumber].name} />
            }
        </div>
    )
}

export default BreedImage