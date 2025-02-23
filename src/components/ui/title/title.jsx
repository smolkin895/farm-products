import styles from "./style.module.css";

export const TitleSize = {
    BIG: "big",
    SMALL: "small",
    LITTLE: "little",
    DEFAULT: ""
}

export default function Title({size, children, className=""}) {
    return(
        <h1 className={`${styles.title} ${size ? styles[`title_${size}`] : ""} ${className ? className : ""}`}>{children}</h1>
    )

} 

