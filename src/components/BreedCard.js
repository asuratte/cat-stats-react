import { CheckLg } from 'react-bootstrap-icons';
import { XLg } from 'react-bootstrap-icons';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';


const BreedCard = (props) => {
    const { breedsList, currentBreedNumber } = props;

    const getStars = (numberOfStars) => {
        return [...Array(numberOfStars)].map((e, i) => <StarFill
            key={i}
        />);
    }

    return (
        <div>
            <div className="breed-card-wrapper d-flex justify-content-center container">
                <div className="breed-card text-center">
                    <div className="name bg-green section-wrapper">
                        {
                            (breedsList[currentBreedNumber].name)
                                ? <h3>{breedsList[currentBreedNumber].name}</h3>
                                : <p>Name unavailable</p>
                        }
                    </div>
                    <div className="description section-wrapper">
                        {
                            (breedsList[currentBreedNumber].description)
                                ? <p>{breedsList[currentBreedNumber].description}</p>
                                : <p>Description unavailable</p>
                        }
                    </div>
                    <div className="main-two-column-section">
                        <div className="image-column">
                            <div className="image section-wrapper">
                                {
                                    (breedsList[currentBreedNumber].image && breedsList[currentBreedNumber].image.url)
                                        ? <img src={breedsList[currentBreedNumber].image.url} alt={breedsList[currentBreedNumber].name} />
                                        : <img src="https://placekitten.com/300/500" alt={breedsList[currentBreedNumber].name} />
                                }
                            </div>
                        </div>
                        <div className="details-column">
                            <div className="temperament section-wrapper">
                                <h4>Temperament</h4>
                                {
                                    (breedsList[currentBreedNumber].temperament)
                                        ? <p>{breedsList[currentBreedNumber].temperament}</p>
                                        : <p>Temperament information unavailable</p>
                                }
                            </div>
                            <div className="three-column-inner-section">
                                <div className="lifespan section-wrapper">
                                    <h4>Life Span</h4>
                                    {
                                        (breedsList[currentBreedNumber].life_span)
                                            ? <p>{breedsList[currentBreedNumber].life_span} years</p>
                                            : <p>Life span information unavailable</p>
                                    }
                                </div>
                                <div className="origin section-wrapper">
                                    <h4>Place of Origin</h4>
                                    {
                                        (breedsList[currentBreedNumber].origin)
                                            ? <p>{breedsList[currentBreedNumber].origin}</p>
                                            : <p>Origin information unavailable</p>
                                    }
                                </div>
                                <div className="weight section-wrapper">
                                    <h4>Weight</h4>
                                    {
                                        (breedsList[currentBreedNumber].weight && breedsList[currentBreedNumber].weight.imperial)
                                            ? <p>{breedsList[currentBreedNumber].weight.imperial} lbs</p>
                                            : <p>Weight information unavailable</p>
                                    }
                                </div>
                            </div>
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
                            <div className="two-column-inner-section">
                                <div className="attributes-yes-no section-wrapper">
                                    <ul>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].lap)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Lap Cat</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].rare)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Rare</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].suppressed_tail)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Suppressed Tail</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].short_legs)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Short Legs</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].hypoallergenic)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Hypoallergenic</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].experimental)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Experimental</li>
                                        <li>
                                            {
                                                (breedsList[currentBreedNumber].natural)
                                                    ? <span className="attribute-icon yes"><CheckLg /></span>
                                                    : <span className="attribute-icon no"><XLg /></span>
                                            }
                                            Natural</li>
                                    </ul>
                                </div>
                                {(breedsList[currentBreedNumber].wikipedia_url || breedsList[currentBreedNumber].vetstreet_url || breedsList[currentBreedNumber].vcahospitals_url) &&
                                    <div className="learn-more section-wrapper">
                                        <h4>Learn More</h4>
                                        {breedsList[currentBreedNumber].wikipedia_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                                        {breedsList[currentBreedNumber].vetstreet_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].vetstreet_url} target="_blank" rel="noopener noreferrer">Vetstreet</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                                        {breedsList[currentBreedNumber].vcahospitals_url && <p><a className="link-primary mt-4" href={breedsList[currentBreedNumber].vcahospitals_url} target="_blank" rel="noopener noreferrer">VCA Animal Hospitals</a> <span className="external-link"><BoxArrowUpRight /></span></p>}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedCard