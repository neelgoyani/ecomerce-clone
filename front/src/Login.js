import React, { useState } from "react";
import logo from "./logo/amazon-black.png";
import './login.css';
import { auth } from './firebase';
import { useHistory } from "react-router-dom";


const Login = () => {
  const history = useHistory()
  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');


  const signin = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,pass)
    .then((auth)=>{
      if(auth){
        history.push('/');
      }
    })
    .catch((err)=>{
      alert(err);
    })
  }

  const register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,pass)
    .then((auth)=>{
      console.log(auth)
      if(auth){
        history.push('/');
      }
    })
    .catch((err)=>{
      alert(err)
    })


  }

  return (
    <>
      <div className="login">
        <img className = 'login_logo' src={logo} />
        <div className="login-container">
          <form>
            <h2>Sign In</h2>
            <h5>Email</h5>
            <input value = {email} onChange = {e=> setEmail(e.target.value)} type="text" />
            <h5>Password</h5>
            <input value = {pass} onChange = {e=>setPass(e.target.value)} type="password" />
            <button onClick = {signin} type = 'submit'>Sign in</button>
          </form>

          <button onClick = {register} className = 'create_login'>Create new account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
