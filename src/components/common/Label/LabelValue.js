import "./LabelValue.css"

const LabelValue = ({label, value}) => {
    return (
        <div className='label-value'>
            <label>{label}: </label><span>{value}</span><br/>
        </div>
    )
}

export default LabelValue