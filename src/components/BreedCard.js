import BreedName from './BreedName';
import BreedDescription from './BreedDescription';
import BreedImage from './BreedImage';
import BreedTemperament from './BreedTemperament';
import BreedLifespan from './BreedLifespan';
import BreedOrigin from './BreedOrigin';
import BreedWeight from './BreedWeight';
import BreedAttributesPoints from './BreedAttributesPoints';
import BreedAttributesYesNo from './BreedAttributesYesNo';
import BreedLearnMore from './BreedLearnMore';

const BreedCard = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <div>
            <div className="breed-card-wrapper d-flex justify-content-center container">
                <div className="breed-card text-center">
                    <BreedName breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                    <BreedDescription breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                    <div className="main-two-column-section">
                        <div className="image-column">
                            <BreedImage breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                        </div>
                        <div className="details-column">
                            <BreedTemperament breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                            <div className="three-column-inner-section">
                                <BreedLifespan breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                                <BreedOrigin breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                                <BreedWeight breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                            </div>
                            <BreedAttributesPoints breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                            <div className="two-column-inner-section">
                                <BreedAttributesYesNo breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                                <BreedLearnMore breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedCard