import Card from "../Card/Card"

const CardList = ({card_list}) => {
    
    return (
        <>
            {Object.keys(card_list).map((card_key) => (
                card_list[card_key].image_uris !== undefined &&
                <Card key={card_list[card_key].id} card={card_list[card_key]}/>
            ))}
        </>
    )
}

export default CardList