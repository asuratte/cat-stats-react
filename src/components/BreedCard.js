import PreviousButton from './PreviousButton';
import NextButton from './NextButton';

const BreedCard = () => {


    return (
        <div className="breed-card-wrapper">
            <PreviousButton />
                <div className="breed-card">
                    <h3>Breed Name</h3>
                    <p>Breed Description</p>
                </div>
            <NextButton />
        </div>
    )
}

export default BreedCard