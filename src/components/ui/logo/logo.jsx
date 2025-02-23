import logo from "@assets/logo.svg";
import styles from './style.module.css';

export default function Logo() {
    return(
        <a className={styles.logo__link} href="/">
        <img src={logo} alt="Логотип" />
        <span className={styles.logo__text}>Фермерские продукты</span>
        </a>
    )
}