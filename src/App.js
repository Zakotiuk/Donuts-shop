import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authorization_page from './components/pages/authorization_page/authorization';
import Cart_page from './components/pages/cart_page';
import Catalog_page from './components/pages/catalog_page';
import Main_page from './components/pages/main_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_page/>}></Route>
          <Route path='/catalog' element={<Catalog_page/>}></Route>
          <Route path='/cart' element={<Cart_page/>}></Route>
          <Route path='/auth' element={<Authorization_page/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
