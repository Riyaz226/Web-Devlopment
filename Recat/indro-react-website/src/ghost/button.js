import React ,{Component} from 'react' //react erruthu name aspola

class Button extends Component{   

      render(){      //return js annavanalu
        const{name, Login} =this.props //this.props anpathu object ,antha object irruthu desturcture panne atukara

        
        return(
             <button onClick={Login}>{name}</button>//this.props.name 
         )
      }
}

export default Button


