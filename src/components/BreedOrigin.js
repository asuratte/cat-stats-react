const BreedOrigin = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="origin section-wrapper">
            <h3>Place of Origin</h3>
            {
                (breedsList[currentBreedNumber].origin)
                    ? <p>{breedsList[currentBreedNumber].origin}</p>
                    : <p>Origin information unavailable</p>
            }
        </div>
    )
}

export default BreedOrigin