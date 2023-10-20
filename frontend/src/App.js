import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import SingleCategory from './Components/SingleCategory/SingleCategory';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Booking from './Components/Booking/Booking';
import Orders from './Components/Booking/Orders';
import About from './Components/Home/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='/products/:id' Component={SingleProduct} />
      <Route exact path='/products/category/:id' Component={SingleCategory} />
      <Route path='/cart' Component={Cart} />
      <Route path='/booking' Component={Booking} />
      <Route path='/orders' Component={Orders} />
      <Route path="/login" Component={Login} />
      <Route path='/signup' Component={Signup} />
      <Route path='/about' Component={About} />
    </Routes>
         
    </BrowserRouter>

  );
}

export default App;
