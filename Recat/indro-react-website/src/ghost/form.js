import React, { Component } from 'react'

export default class form extends Component {
                //control compounted method  =>form
    constructor (props) { //class constructor with join props
        super(props) //child function use and props use super call

        this.state={
             username:'',
             email:'',
        }
        this.onNameChange =this.onNameChange.bind(this);
    }

    sumbit=(event) =>{
        event.preventDefault()
             console.log('sumbit button clicked')
             console.log('username is',this.state.username)
             console.log('email is',this.state.email)
    }
    
   onNameChange =(event) =>{
       console.log('username',event.target.value)
        this.setState({username: event.target.value})
   }

   onEmailChange =(event) =>{
    
    this.setState({email: event.target.value})
}

    render() {
        return (
            <form>
                <input type="text" placeholder="name" value={this.state.useername} onChange={this.onNameChange}></input>
                <input type="email" placeholder="four email" value={this.state.email}  onChange={this.onEmailChange}></input>
                <button onClick={this.sumbit}>sumbit</button>
            </form>
        )
    }
}
