const BreedWeight = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="weight section-wrapper">
            <h3>Weight</h3>
            {
                (breedsList[currentBreedNumber].weight && breedsList[currentBreedNumber].weight.imperial)
                    ? <p>{breedsList[currentBreedNumber].weight.imperial} lbs</p>
                    : <p>Weight information unavailable</p>
            }
        </div>
    )
}

export default BreedWeight