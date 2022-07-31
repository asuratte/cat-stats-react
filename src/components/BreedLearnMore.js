import { BoxArrowUpRight } from 'react-bootstrap-icons';

const BreedAttributesYesNo = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
        <>
            {(breedsList[currentBreedNumber].wikipedia_url || breedsList[currentBreedNumber].vetstreet_url || breedsList[currentBreedNumber].vcahospitals_url) &&
                <div className="learn-more section-wrapper">
                    <h4>Learn More</h4>
                    {breedsList[currentBreedNumber].wikipedia_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                    {breedsList[currentBreedNumber].vetstreet_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].vetstreet_url} target="_blank" rel="noopener noreferrer">Vetstreet</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                    {breedsList[currentBreedNumber].vcahospitals_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].vcahospitals_url} target="_blank" rel="noopener noreferrer">VCA Animal Hospitals</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                </div>
            }
        </>
    )
}

export default BreedAttributesYesNo