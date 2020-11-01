import React from 'react';
import {GlobalStyle} from './Components/Hooks/Style/GlobalStyle';
import {NavBar} from './Components/Hooks/NavBar/NavBar';
import {Menu} from './Components/Hooks/Menu/Menu';
import {ModalItem} from './Components/Hooks/Modal/ModalItem';
import {Order} from './Components/Hooks/Order/Order';
import {useOpenItem} from './Components/Hooks/Order/useOpenItem';
import {useOrders} from './Components/Hooks/Order/useOrders';


function App() {

  /* const [openItem, setOpenItem] = React.useState(null); */
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;