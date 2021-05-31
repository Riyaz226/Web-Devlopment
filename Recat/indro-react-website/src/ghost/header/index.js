import React,{Component} from 'react'
import './style.css'
import Button from '../button'

class Header extends Component { //header pranent component

    state ={
       isLoggedIn: false, 
    }

  Login = ()=>{
     // alert('Login button') //componennt
     this.setState({isLoggedIn:true}) //(isLoggedIn:false)intha state'ta replace pannum
  }

  render(){
     return (
         <div class="ghost">
             { this.state.isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
             
             <span style={{marginLeft:"-5%"}}> 
             <Button name="Login" Login={this.Login}/>
           </span>
           <img src="Flight.jpg"  alt="flight"/>  
        </div>
     )
     }
  
    }
export default Header

