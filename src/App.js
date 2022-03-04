import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';


function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          {/* ruta home */}
          <Route exact path="/">
            <div className="App">
              <header>
                <ItemListContainer greeting={"Bienvenido a BARA SUSHI!"} />
              </header>
            </div>
          </Route>
          
          {/* {/* ruta categorias */}
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          
          {/* ruta producto */}
          <Route path="/product/:productId">
            <ItemDetailContainer />
          </Route>
          
          {/* ruta carrito */}
          <Route path="/cart">
            <Cart />
          </Route>
        
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
