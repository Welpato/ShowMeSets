import SimpleImage from "../../common/SimpleImage/SimpleImage.js"
import LabelValue from "../../common/Label/LabelValue.js"

const BaseSetInfo = ({set_data}) => {
    return (
        <>
            <SimpleImage src={set_data.icon_svg_uri} size='small'/><br/>
            <h3>{set_data.name}</h3><br/>
            <LabelValue label={'Code'} value={(set_data.code).toUpperCase()}/>
            <LabelValue label={'Card Amount'} value={set_data.card_count}/>
            <LabelValue label={'Digital'} value={set_data.digital ? 'Yes': 'No'}/>
        </>
    )
}

export default BaseSetInfo