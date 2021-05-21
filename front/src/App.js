import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Order from './Order';

const promise = loadStripe('pk_test_51I6BjTIyFW7EppTvEsahQmvpnJG25Lfuh4zI8MueMUgqRfL8D0CAONoglgL3K4U7VLsc4ShCOR9SVZM530By2CNT00BJ8EQSdv');

const App = ()=>{
  const [state,dispatch] = useStateValue();
  useEffect(()=>{
    
    
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){

        dispatch({
          type : 'SET_USER',
          user : authUser
        })

      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[])


  return(
    <>  
      <BrowserRouter>
        <Switch>
          <Route exact path = '/login'>
            <Login />
          </Route>
          <Route exact path = '/'>
            <Header />
            <Home />
          </Route>
          <Route exact path = '/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path = '/payment'>
            <Header />
            <Elements stripe = {promise}>
               <Payment />
            </Elements>
          
          </Route>
          <Route path = '/order'>
            <Header />
            <Order />
          </Route>
        </Switch>
      </BrowserRouter>

      


    </>
  )
}

export default App;
