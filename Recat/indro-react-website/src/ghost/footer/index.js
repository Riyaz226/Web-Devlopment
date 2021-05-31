import React from 'react'
import './style.css'
import Button from '../button'
import Form from '../form'

const listItems =[
      'Functional components',
      'props.children',
      'Common Layout',

]

const arr=[]

listItems.forEach((item, index) => {
  arr.push(<li key={index}>{item}</li>)
})

const Footer = () => {
    return (
        <div class="footer">
        <h1>Footer Text</h1>
       
         <ul>
           {/*  {listItems.map((item,index) => <li key= {index}>{item}</li>)} */}
           {arr}      
         </ul>
        <Form/>
        <div className="buttonWrapper">
           <Button name="sumbit"/>
           <Button name="verify"/>
           <Button name="confirm"/>
           <Button name="clear"/>
        </div>
        
    
    </div>
    )
}

export default Footer

