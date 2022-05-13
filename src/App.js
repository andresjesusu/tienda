import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from "./context/CartContext";
import Footer from './components/Footer';


const App = () => {

  return (
    <div className="page-container">
      <div className="content-wrap">
    <CartProvider>
  <BrowserRouter>
    <Routes>
     <Route exact path="/" element={ <Layout/>} >
     <Route index element={ <ItemListContainer greeting="Bienvenidos a AFK's Store Online!"/>} />
     <Route path="/product/:id" element={<ItemDetailContainer />} />
     <Route exact path="/cart" element={<Cart/>}></Route>
     {/* <Route exact path="/AddItem" element={<AddItem/>}></Route> */}
     <Route exact path="*" element={ <NoPage/>} />
    </Route>
    
    </Routes>
  </BrowserRouter>
  </CartProvider>
  </div>
  <Footer/>
  </div>
  );
}

export default App;
