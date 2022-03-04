import './Header.css'
import logo from './../../assets/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img className="logo" src={logo}/>
            </a>
        </div>
    )
}

export default Header