
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';

import Dashboard from './Pages/AdminPages/Dashboard';

import SingleProduct from './Pages/single_product/SingleProduct';
import Checkout from './Pages/checkout_page/Checkout';



function App() {
  return (
    <div >
        {/* <Login />

        <Signup />
      */}
        {/* <Navbar/> */}
        <Dashboard/>
        

        <Signup /> */}
        <Navbar/>
        {/* <SingleProduct /> */}
        {/* <Checkout /> */}

    </div>
  );
}

export default App;
