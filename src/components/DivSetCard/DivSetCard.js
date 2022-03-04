import LabelValue from "../common/Label/LabelValue"
import SimpleImage from "../common/SimpleImage/SimpleImage"
import "./DivSetCard.css"

const DivSetCard = ({set}) => {
    let OpenSet = () => {
        window.location.href = '/set/'+set.code;
    }

    return (
        <div className='div-set-card' onClick={OpenSet}>
            <SimpleImage src={set.icon_svg_uri} size='small'/>
            <h3>{set.name}</h3>
            <LabelValue label={'Code'} value={(set.code).toUpperCase()}/>
            <LabelValue label={'Card Amount'} value={set.card_count}/>
            <LabelValue label={'Digital'} value={set.digital ? 'Yes': 'No'}/>
        </div>
    )
}

export default DivSetCard