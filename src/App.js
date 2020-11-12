import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {GlobalStyle} from './Components/Style/GlobalStyle';
import {NavBar} from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';
import {useAuth} from './Components/Hooks/useAuth';
import {useTitle} from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyCIfYGo30Lt2Qmzaan7LNcBnvNut9APHLQ",
  authDomain: "mrdonald-2e049.firebaseapp.com",
  databaseURL: "https://mrdonald-2e049.firebaseio.com",
  projectId: "mrdonald-2e049",
  storageBucket: "mrdonald-2e049.appspot.com",
  messagingSenderId: "366583395374",
  appId: "1:366583395374:web:53fccd3889c750f0ae5bbf"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders}
             {...openItem}
             {...auth}
             firebaseDatabase={firebase.database}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;