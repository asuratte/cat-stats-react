import { StarFill } from 'react-bootstrap-icons';

const BreedAttributesPoints = (props) => {
    const { breedsList, currentBreedNumber } = props;
    
    const getStars = (numberOfStars) => {
        return [...Array(numberOfStars)].map((e, i) => <StarFill
            key={i}
        />);
    }
    return (
        <div className="attributes-points section-wrapper">
            <ul>
                <span>
                    {breedsList[currentBreedNumber].affection_level && <li>Affection <span className="points-value">{getStars(breedsList[currentBreedNumber].affection_level)}</span></li>}
                    {breedsList[currentBreedNumber].energy_level && <li>Energy <span className="points-value">{getStars(breedsList[currentBreedNumber].energy_level)}</span></li>}
                    {breedsList[currentBreedNumber].vocalisation && <li>Vocalization <span className="points-value">{getStars(breedsList[currentBreedNumber].vocalisation)}</span></li>}
                    {breedsList[currentBreedNumber].intelligence && <li>Intelligence <span className="points-value">{getStars(breedsList[currentBreedNumber].intelligence)}</span></li>}
                </span>
                <span>
                    {breedsList[currentBreedNumber].shedding_level && <li>Shedding <span className="points-value">{getStars(breedsList[currentBreedNumber].shedding_level)}</span></li>}
                    {breedsList[currentBreedNumber].grooming && <li>Grooming <span className="points-value">{getStars(breedsList[currentBreedNumber].grooming)}</span></li>}
                    {breedsList[currentBreedNumber].dog_friendly && <li>Dog Friendly <span className="points-value">{getStars(breedsList[currentBreedNumber].dog_friendly)}</span></li>}
                    {breedsList[currentBreedNumber].child_friendly && <li>Child Friendly <span className="points-value">{getStars(breedsList[currentBreedNumber].child_friendly)}</span></li>}
                </span>
            </ul>
        </div>
    )
}

export default BreedAttributesPoints