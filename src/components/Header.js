import React, { useState } from 'react'
import logo from '../img/adidas.png'
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header__container'>
                <a href="#"><img src={logo} alt='asd'></img></a>
                <ul className='header__nav nav'>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={
                        `nav__bin
                        ${cartOpen && 'active'}`
                    } />
                    <li className="nav__item">About adidas</li>
                </ul>

                {cartOpen && (
                    <div className="header__shop">

                    </div>
                )}
            </div>
        </header>
    )
}
