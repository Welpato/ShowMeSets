import './SimpleImage.css'

const ImageSizes = {
    'small': 'square-img-small  simple-img',
    'medium': 'square-img-medium  simple-img',
    'big': 'square-img-big  simple-img',
    'card': 'simple-img-card',
}
const SimpleImage = ({src, size}) => {
    if(ImageSizes[size] === undefined) {
        size = 'medium'
    }

    return (
        <img className={`${ImageSizes[size]}`} src={src}/>
    )
}

export default SimpleImage