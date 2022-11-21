import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jfif'


export const Header = () => {
    return (
        <hedaer className='Header'>
            
            <a href='#'>
                <div className='logo'>
                    <img src={logo} alt='logo' width="150"></img>
                </div>
            </a>


            <ul>
                <li>
                    {/*<a href='/'>INICIO</a>*/}
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/Productos">PRODUCTOS</Link>
                    {/*<a href='/Productos'>PRODUCTOS</a>*/}
                </li>
            </ul>

            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
            </div>

        </hedaer>
    )
}