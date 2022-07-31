const BreedName = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div className="name bg-green section-wrapper">
            {
                (breedsList[currentBreedNumber].name)
                    ? <h3>{breedsList[currentBreedNumber].name}</h3>
                    : <p>Name unavailable</p>
            }
        </div>
    )
}

export default BreedName