const BreedDescription = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="description section-wrapper">
            {
                (breedsList[currentBreedNumber].description)
                    ? <p>{breedsList[currentBreedNumber].description}</p>
                    : <p>Description unavailable</p>
            }
        </div>
    )
}

export default BreedDescription