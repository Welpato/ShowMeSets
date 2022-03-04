import CardList from "../CardList/CardList.js"
import BaseSetInfo from "./BaseSetInfo/BaseSetInfo.js"

const SetInfo = ({set_data, card_list}) => {
    //TODO:Show set data
    return (
        <CardList card_list={card_list}/>
    )
    /*return (
        <>
            <BaseSetInfo set_data={set_data}/>
            <CardList card_list={card_list}/>
        </>
    )*/
}

export default SetInfo