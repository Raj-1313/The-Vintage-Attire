import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';

import Dashboard from './Pages/AdminPages/Dashboard';

import SingleProduct from './Pages/single_product/SingleProduct';
import Checkout from './Pages/checkout_page/Checkout';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import { Box } from '@chakra-ui/react';
import Home from './Pages/Home/Home';
import AllRoutes from './Hof/AllRoutes';


function App() {
  return (
    <div >
        {/* <Login />
        <Signup /> */}
        {/* <Navbar/>
        <Home/> */}
        <AllRoutes/>
        {/* <Footer/> */}
        {/* <SingleProduct /> */}
        {/* <Checkout /> */}
    </div>
  );
}

export default App;
