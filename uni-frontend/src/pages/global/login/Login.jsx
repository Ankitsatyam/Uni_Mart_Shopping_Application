import React, {  useState } from 'react'
import classes from './login.module.css'
import Facebook from './images/facebook.png'
import Google from './images/googleplus.png'
import Linkedin from './images/linkedin.png'
import axios from 'axios'

const Login = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [authenticationObject,setAuthenticationObject] = useState({})
  const nameHandler = (e)=>{
      setName(e.target.value)
  }
  const passwordHandler = (e)=>{
      setPassword(e.target.value)
  }

  const submitHandler = ()=>{
    axios.get("http://localhost:8000/login").then((authenticationObject)=>{
      if(name === authenticationObject.data.username && password === authenticationObject.data.password){
        console.log("sucess")
      }
      else{
        console.log("bad credentials")
      }
    }).catch((err)=>{
      console.error(err)
    })
      setName("")
      setPassword("")
  }

  return (
    <div className={classes.ctn}>
      <div className={classes.login_box}>
        <h1 className={classes.login_header}>Login to Your Account</h1>
        <div>
          <p className={classes.login_para}>Login using your social handles</p>
          <div className={classes.social_icons}>
            <a href="https://www.facebook.com/"target='blank'><img src={Facebook} alt="Facbook icon" width="35px"/></a>
            <a href="https://www.google.com/account" target='blank'><img src={Google} alt="Google icon"  width="35px"/></a>
            <a href="https://www.linkedin.com/" target='blank'><img src={Linkedin} alt="Linkedin icon"  width="35px"/></a>
          </div>
          OR
          <div className={classes.input}>
            <input className={classes.email_input}type="email" placeholder='Email' onChange={nameHandler} value={name}/>
            <input className={classes.pass_input} type="password" placeholder='Password' onChange={passwordHandler} value={password}/>
            <button className={classes.signin_button} type='submit' onClick={submitHandler}>Sign In</button>
          </div>
        </div>
      </div>
      <div className={classes.signup_box}>
        <h1 className={classes.signup_header}>New Here?</h1>
        <p className={classes.signup_para}>Sign up and discover  great amount of new opportunities</p>
        <button className={classes.signup_button} type='submit'>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
