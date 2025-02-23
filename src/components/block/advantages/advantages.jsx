import Title from "@ui/title/title"
import Button from "@ui/button/button"
import AdvantageCard from "@ui/advantage-card/advantage-card"
import styles from "./style.module.css"

export default function Advantages({ advantages }) {
    return (
        <section className={styles.advantages}>
            {advantages?.length > 0 ?
                <>
                    <Title>Почему фермерские продукты лучше?</Title>
                    <div className={styles.ul_container}>
                        <ul className={styles.advantages_list}>
                            {advantages.map((advantage) => {
                                if (advantage.feature === "farmer") {
                                    return (
                                        <li className={styles.advantages_list__item} key={advantage.id}>
                                            <AdvantageCard {...advantage} />
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <ul className={styles.advantages_list}>
                            {advantages.map((advantage) => {
                                if (advantage.feature !== "farmer") {
                                    return (
                                        <li className={styles.advantages_list__item} key={advantage.id}>
                                            <AdvantageCard {...advantage} />
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </>
                : null}
        </section>
    )
}