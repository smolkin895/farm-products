import React from "react";
import Title, { TitleSize } from "@ui/title/title";
import AdvantageIcon from "@ui/advantage-icon/advantage-icon";
import "./style.css";

export default function AdvantageCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  let color = feature === "farmer" ? "green" : "red";
  return (
    <article className={`advantage-card advantage-card__${color}`}>
      <figure className="advantage-card__figure">
        <img
          src={image}
          className="advantage-card__image"
          width={52}
          height={52}
          alt="изображение кота"
        />
        <div className="advantage-title__wrapper">
          <AdvantageIcon className="advantage-card__icon" feature={feature} />
          <Title size={TitleSize.LITTLE} className="advantage-title">{name}</Title>
      </div>
      </figure>

      <p
        className="advantage-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}
