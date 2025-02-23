import React from "react";
import Title, { TitleSize } from "@ui/title/title";
import AdvantageIcon from "@ui/advantage-icon/advantage-icon";
import styles from "./style.module.css";

export default function AdvantageCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  let color = feature === "farmer" ? "green" : "red";
  return (
    <article className={`${styles.advantage_card} ${styles[`advantage_card__${color}`]}`}>
      <figure className={styles.advantage_card__figure}>
        <img
          src={image}
          className={styles.advantage_card__image}
          // width={52}
          // height={52}
          alt="изображение кота"
        />
        <div className={styles.advantage_title__wrapper}>
          <AdvantageIcon className={styles.advantage_card__icon} feature={feature} />
          <Title size={TitleSize.LITTLE} className={styles.advantage_title}>{name}</Title>
      </div>
      </figure>

      <p
        className={styles.advantage_card__text}
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}
