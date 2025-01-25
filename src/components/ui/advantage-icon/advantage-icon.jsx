import "./style.css";

export const advantageFeature = {
    FARMER: "farmer",
    STORE: "store"
}

export default function AdvantageIcon({ className="", feature }) {
    let options;

    switch(feature)  {
        case advantageFeature.FARMER:
            options = {
                bgColor:"#88AA4D",
                text:"Фермерские продукты"
            };
            break;
        case advantageFeature.STORE:
            options = {
                bgColor:"#F75531",
                text:"Магазинные продукты"
            };
            break;
        default:
            options = {
                bgColor:"#000",
                text:""
            };
            break;
    }

    return options.text ? (
        <span
        className={`advantage-icon ${className}`}
        style={{ backgroundColor: options.bgColor }}>
            {options.text}
        </span>
    ) : null;
}