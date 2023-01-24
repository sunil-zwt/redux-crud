import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import CartContainer from './component/CartContainer';
import { useSelector,useDispatch } from 'react-redux';
import { calculatorTotal } from './features/cart/CartSlice';
import { useEffect } from 'react';

function App() {

  const {cartItems} = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(calculatorTotal())
  },[cartItems])
  return (
   <main>
    <Navbar/>
   <CartContainer/>
   </main>
  );
}

export default App;
