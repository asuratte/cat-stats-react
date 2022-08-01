const BreedTemperament = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="temperament section-wrapper">
            <h3>Temperament</h3>
            {
                (breedsList[currentBreedNumber].temperament)
                    ? <p>{breedsList[currentBreedNumber].temperament}</p>
                    : <p>Temperament information unavailable</p>
            }
        </div>
    )
}

export default BreedTemperament