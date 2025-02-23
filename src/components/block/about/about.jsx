import React from "react";
import Title, { TitleSize } from "@ui/title/title";
import styles from "./style.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
        <p className={styles.about__text}>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
    </section>
  );
}

export default About;
