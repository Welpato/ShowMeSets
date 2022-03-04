import DivSetCard from "../DivSetCard/DivSetCard.js"
import './SetList.css'

const SetList = ({set_list}) => {
    return (
        <div className='set-list'>
            {Object.keys(set_list).map((set_key) => (
                <DivSetCard key={set_list[set_key].id} set={set_list[set_key]}/>
            ))}
        </div>
    )
}

export default SetList