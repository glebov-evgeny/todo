import React, { useState } from "react";
import "./item.styles.scss";

const Item = (props) => {
  const {
    id,
    title,
    status,
    handleStatus = Function.prototype,
    handleDelete = Function.prototype,
  } = props;

  return (
    <div
      className={status ? "card__item" : "card__item card__item--done"}
      onClick={() => handleStatus(id)}
    >
      <div className="card__item-content">
        <p className="card__item-title">{title}</p>
        <button className="card__item-delete"  onClick={() => handleDelete(id)}>Удалить</button>
      </div>

      <div
        className={
          status
            ? "card__item-checkbox"
            : "card__item-checkbox card__item-checkbox--done"
        }
      ></div>
    </div>
  );
};

export default Item;
