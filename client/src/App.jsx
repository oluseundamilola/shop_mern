import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector( (state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact={true} path="products" element={<ProductList/>} />
        <Route exact={true} path="products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={ user ? <Navigate  to="/" /> : <Login /> } />
        <Route path="/register" element={ user ? <Navigate  to="/" /> : <Register /> } />
        <Route exact path="/success" element={<Success/>} />

      </Routes>
    </Router>

    




    //
    //<Product />
    //<Login />
    //<Register />
    //<Cart />
  );
};

export default App;