import Title from "@ui/title/title"
import Button from "@ui/button/button"
import AdvantageCard from "@ui/advantage-card/advantage-card"
import "./style.css"

export default function Advantages({ advantages }){
    return(
        <section className="advantages">
            {advantages?.length > 0 ? 
            <>
                <Title>Почему фермерские продукты лучше?</Title>
                <ul className="advantages-list">
                    {advantages.map((advantage) =>(
                        <li className="advantages-list__item" key={advantage.id}>
                            <AdvantageCard {...advantage}/>
                        </li>
                    ))}
                </ul>
                <Button>Купить</Button>
            </>
            :null}
        </section>
    )
}