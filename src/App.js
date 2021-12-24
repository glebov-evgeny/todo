import { useState, useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, deleteDoc, updateDoc, onSnapshot, query, serverTimestamp } from "firebase/firestore"
/* инициализация firebase  */

import Card from "./components/card/card.component";
import Modal from "./components/modal/modal.component";


// eslint-disable-next-line
const firebase = initializeApp(
  {
    apiKey: "AIzaSyAVxqHqh6PXHTM8SM5cAivbrIPl_H7A56Y",
    authDomain: "todo-aaa23.firebaseapp.com",
    projectId: "todo-aaa23",
    storageBucket: "todo-aaa23.appspot.com",
    messagingSenderId: "443059359185",
    appId: "1:443059359185:web:f134b625dd6a3dae31e4f0"
  }
);

function App() {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const db = getFirestore();

  const handleModal = () => {
    setModal(!modal)
  } 
  
  /* Получение данных */
  useEffect(() => {
    const getData = query(collection(db, 'todo'))
    onSnapshot(getData, (querySnapshot) => {
      var arr = [];
      querySnapshot.forEach(function(doc) {
        arr.push(doc.data());
      })

      /* сортирую по дате последнее добавленное вверху , далее по убыванию */
      arr.sort((a,b) => 
      (b.createAt - a.createAt)
      )

      setItems(arr);
  });
  }, [db])

  const handleAdd = async (value) => {
    const randomId = Math.random();
    if (value !== ''){
      setError(false)
      const newItem = {
        title: value,
        status: true,
        id: randomId,
        createAt: serverTimestamp()
      }
      setItems([...items, newItem]);

      await setDoc(doc(db, 'todo', `${randomId}`), {
        id: randomId,
        title: value,
        status: true,
        createAt: serverTimestamp()
      });
      handleModal()
    }
    else{
      setError(true)
    }

  }

  const handleStatus = async (id) => {
    
    setItems(      
      items.map(item => {

        if(item.id === id) {
          item.status = !item.status;
          const ref = doc(db, "todo", `${id}`);
          updateDoc(ref, {
            status: item.status
          });
          return item
        }
        return item
      })
    )
  }

  const handleDelete = (id) => {
    setItems(      
      items.map(item => {
        if(item.id === id) {   
            const ref = doc(db, "todo", `${id}`);
            deleteDoc(ref)   
          return item
        }
        return item
      })
    )
  }

  return (
    <div className="wrapper">
        <main className="main">
          <div className="container">
            <Card handleModal={handleModal} modal={modal} handleStatus={handleStatus} handleDelete={handleDelete} items={items}/>
            <Modal handleModal={handleModal} modal={modal} handleAdd={handleAdd} error={error}/>
          </div>                     
        </main>
    </div>
  );
}

export default App;
