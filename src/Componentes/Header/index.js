import React from 'react'
import logo from '../../images/logo.jfif'


export const Header =() => {
    return (
        <hedaer>

             <a href='#'>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                </div>
             </a>

            <ul>
                <li>
                    <a href='#'>INICIO</a> 
                </li>
                <li>
                    <a href='#'>PRODUCTOS</a> 
                </li>
            </ul>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item__total'>0</span>
        </div>










                
        </hedaer>
    )
}