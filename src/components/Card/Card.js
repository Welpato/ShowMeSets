import SimpleImage from "../common/SimpleImage/SimpleImage"
import './Card.css'

const Card = ({card}) => {
    return (
        <a href={card.scryfall_uri} target='_blank'>
            <SimpleImage src={card.image_uris.normal} size='card'/>
        </a>
    )
}

export default Card