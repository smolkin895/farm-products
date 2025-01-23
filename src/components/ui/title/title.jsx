import "./style.css";

export const TitleSize = {
    BIG: "big",
    SMALL: "small",
    DEFAULT: ""
}

export default function Title({size, children}) {
    return(
        <h1 className={`title ${size ? `title_${size}` : ""}`}>{children}</h1>
    )

} 

