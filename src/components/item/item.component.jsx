import React, {useState} from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import './item.styles.scss'




const Item = (props) => {
  const nodeRef = React.useRef(null);
  const {id, title, text, status, handleCheck = Function.prototype} = props;
  const [isActive, setIsActive] = useState(false);
  
  return(
    <div className={status ? "card__item" : "card__item card__item-done"}>       

        <div className="card__item-content">
          <p className="card__item-title" onClick={() => setIsActive(!isActive)}>{title}</p>
          <p>{status}</p>
          <TransitionGroup>
          {isActive && (
            <CSSTransition classNames="card__item-text-option" timeout={300} nodeRef={nodeRef}>
              <p className="card__item-text" ref={nodeRef}>{text}</p>
            </CSSTransition>
            )
          }   
          </TransitionGroup>
        </div>

       <div className={status ? 'card__item-checkbox': 'card__item-checkbox card__item-checkbox-active'} onClick={() => handleCheck(id)}></div>

      </div>
  )

} 

export default Item