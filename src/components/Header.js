import React, { useState } from 'react'
import logo from '../img/adidas.png'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

function print(orders, onRemove) {
    return (
        <div className="header__orders orders">
            {orders.map(el => (
                <Order key={el.id} item={el} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header__container'>
                <a href="#"><img src={logo} alt='asd'></img></a>
                <ul className='header__nav nav'>
                    <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={
                        `nav__binBlock $ {cartOpen && 'active'}`}>
                        <FaShoppingCart className='nav__bin' //onClick={() => setCartOpen(cartOpen = !cartOpen)} className={
                            //`nav__bin
                            //${cartOpen && 'active'}`
                        /*}*/ />
                        {
                            Boolean(props.orders.length) && <span className='nav__counter noselect'>{props.orders.length}</span>
                        }

                    </div>
                    <li className="nav__item">About adidas</li>
                </ul>
                {cartOpen && (
                    Boolean(props.orders.length) ?
                        print(props.orders, props.onRemove)
                        :
                        setCartOpen(cartOpen = !cartOpen)
                )
                }
            </div>
        </header>
    )
}


