import { initializeApp } from "firebase/app";
/* инициализация firebase  */

import Card from "./components/card/card.component";

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

  return (
    <div className="wrapper">
        <main className="main">
          <div className="container">
            <Card/>
          </div>                     
        </main>
    </div>
  );
}

export default App;
