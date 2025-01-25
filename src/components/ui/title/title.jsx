import "./style.css";

export const TitleSize = {
    BIG: "big",
    SMALL: "small",
    LITTLE: "little",
    DEFAULT: ""
}

export default function Title({size, children, className=""}) {
    return(
        <h1 className={`title ${size ? ` title_${size}` : ""} ${className}`}>{children}</h1>
    )

} 

