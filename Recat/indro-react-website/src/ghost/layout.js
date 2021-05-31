import React from 'react'
import Header from './header/index'
import Footer from './footer/index'


export default function layout(props) {
    return (
        <>
        <Header/>
             {props.children}
        <Footer/>

       </> 
    )
}
