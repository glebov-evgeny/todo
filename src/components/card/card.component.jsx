import './card.styles.scss'

import Item from '../item/item.component';
import add from './img/add.png';

const Card = (props) => {
  const {
    modal,
    items,
    handleStatus = Function.prototype,
    handleDelete = Function.prototype,
    handleModal = Function.prototype,
  } = props;

  return(
    <div className={modal ? 'card card-blur': 'card'}>
    <h1 className='card__title'>Список задач:</h1>
    <div className="card__block">
      <div className="card__list">
        {items.map((item) => (
          <Item key={item.id} {...item} handleStatus={handleStatus} handleDelete={handleDelete}/>
        ))}
      </div>

      </div>
      <button className='card__add' onClick={() => handleModal()}>
        <img src={add} alt="logo" />
      </button>
  </div>
  )
}

export default Card