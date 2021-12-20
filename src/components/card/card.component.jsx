import { useState, useEffect} from "react";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore"

import './card.styles.scss'

import Item from '../item/item.component';
import add from './img/add.png';



const Card = () => {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const db = getFirestore();

  /* Получение данных */
  useEffect(() => {
    const getData = query(collection(db, 'todo'))
    onSnapshot(getData, (querySnapshot) => {
      /* перевожу объекты в массив */
      var arr = [];
      querySnapshot.forEach(function(doc) {
        // console.log(doc.data().createAt, " => ", doc.data());
        arr.push(doc.data());
      })
      /* сортирую по дате */

      // arr.sort((a,b) => 
      //   (a.createAt - b.createAt)
      // )
      
      /* добавляю в стэйт */
      setItems(arr);
  });
  }, [db])


  const handleCheck = (id) => {
    setItems(
      items.map(item => {
        if(item.id === id) {
          item.status = !item.status;
          // const ref = db.collection(authID).doc(id);
          // ref.update({ completed: todo.completed })
          return item
        }
        return item
      })
    )
  }

  return(
    <div className="card">
    <h1 className='card__title'>Список задач:</h1>
    <div className="card__block">
      <div className="card__list">
        {items.map((item) => (
          <Item key={item.id} {...item} handleCheck={handleCheck}/>
        ))}
      </div>
      <div className="card__info"></div>
      </div>
      <button className='card__add'><img src={add} alt="logo" /></button>
  </div>
  )
}

export default Card