import { CheckLg } from 'react-bootstrap-icons';
import { XLg } from 'react-bootstrap-icons';

const BreedAttributesYesNo = (props) => {
    const { breedsList, currentBreedNumber } = props;

    return (
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
    )
}

export default BreedAttributesYesNo