const BreedLifespan = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="lifespan section-wrapper">
            <h3>Life Span</h3>
            {
                (breedsList[currentBreedNumber].life_span)
                    ? <p>{breedsList[currentBreedNumber].life_span} years</p>
                    : <p>Life span information unavailable</p>
            }
        </div>
    )
}

export default BreedLifespan