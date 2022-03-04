import { PLANESWALKER_SVG } from '../../../utils/constants'
import './Loading.css'

const Loading = () => {
    return (
        <img className='loading' src={PLANESWALKER_SVG}/>
    )
}

export default Loading