import Button from 'react-bootstrap/Button';

const Navigation = (props) => {
    const { breedsList, currentBreedNumber, handleSelectionChange, getRandom, getPrevious, getNext } = props;

    return (
        <nav className="navbar navbar-expand-lg mb-4">
            <div className="container-fluid justify-content-center align-items-center py-3">
                <div className="breeds-select text-center">
                    <select onChange={handleSelectionChange} name="breeds" className="form-select" defaultValue={'DEFAULT'}>
                        <option key="DEFAULT" value="DEFAULT" disabled="disabled">Select a breed...</option>
                        {breedsList.map((breed, index) => (
                            <option key={index} value={index}>
                                {breed.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="random-button-wrap text-center">
                    <Button onClick={getRandom} className="btn random-button">Get Random Breed</Button>
                </div>
                <div className="prev-next-button-wrap">
                    <Button onClick={getPrevious} className="btn prev-button" disabled={currentBreedNumber <= 0}>Previous</Button>
                    <Button onClick={getNext} className="btn next-button" disabled={currentBreedNumber >= (breedsList.length - 1)}>Next</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation