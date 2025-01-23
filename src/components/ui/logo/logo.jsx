import logo from "@assets/logo.svg";
import './style.css';

export default function Logo() {
    return(
        <a className="logo__link" href="/">
        <img src={logo} alt="Логотип" />
        <span className="logo__text">Фермерские продукты</span>
        </a>
    )
}