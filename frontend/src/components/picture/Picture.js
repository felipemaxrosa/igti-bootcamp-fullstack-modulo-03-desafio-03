import React from "react";
import css from "./picture.module.css";

export default function Picture({ imageSource, description }) {
  return (
    <div>
      <img
        src={imageSource}
        className={css.image}
        alt={description}
        title={description}
      />
    </div>
  );
}
