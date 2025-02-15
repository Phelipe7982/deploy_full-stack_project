import logoApp from "../assets/logo/logoApp.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__image" src={logoApp} alt="Logo da Spotify" />
            </Link>

            <Link to="/" className="header__link" >
                <h1>BeatzOn</h1>
            </Link>
        </div>
    )
}

export default Header;