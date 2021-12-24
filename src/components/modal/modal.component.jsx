import React, {useState} from "react";
import "./modal.styles.scss";

const Modal = (props) => {
  const {
    modal,
    error,
    handleModal = Function.prototype,
    handleAdd = Function.prototype,
  } = props;

  const [value, setValue] = useState('')

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleAdd(value)
      setValue('')
      handleModal()

    }
  };

  return (
    <>
      <div className={modal ? "popup md-show" : "popup"} id="popup-form">
        <button className="popup__close" onClick={() => handleModal()}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="24.041"
              y="7.07104"
              width="4"
              height="24"
              transform="rotate(45 24.041 7.07104)"
              fill="white"
            />
            <rect
              x="26.8711"
              y="24.0417"
              width="4"
              height="24"
              transform="rotate(135 26.8711 24.0417)"
              fill="white"
            />
          </svg>
        </button>
        <div className="popup__wrapper">
          <h2 className="popup__title">Создать новую задачу</h2>
          <input
            type="text"
            className={error ? "popup__input error" : "popup__input"}
            placeholder="Сделать что-то..."
            value={value}
            onChange={(evtent) => setValue(evtent.target.value)}
            onKeyDown={handleKey}
          />
          <button className="popup__button" onClick={() => handleAdd(value)}>
            Отправить
          </button>
        </div>
      </div>
      <div className="md-overlay" onClick={() => handleModal()}></div>
    </>
  );
};

export default Modal;
