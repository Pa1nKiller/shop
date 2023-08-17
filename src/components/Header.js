import React, { useState } from 'react'
import logo from '../img/adidas.png'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

function printOrders(props) {
    if (Boolean(props.orders.length)) {
        return (
            <div className="header__orders">
                <div className="orders">
                    {props.orders.map(el => (
                        <Order key={el.id} item={el} onRemove={props.onRemove} />
                    ))}
                </div>
                <Link to={{ pathname: '/buy' }} state={{ data: props.orders }}><button className='btn-buy'>Оплатить</button></Link>
            </div>
        )
    } else {
        return (
            <div className="header__orders orders">
                <p className='orders__noOrders'>Товары пока не добавлены</p>
                <Link to={{ pathname: '/buy', state: { orders: props.orders } }}><button className='btn-buy'>Оплатить</button></Link>
            </div>
        )
    }
}


export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header__container'>
                <a href="#"><img src={logo} alt='asd'></img></a>
                <ul className='header__nav nav'>
                    <div onClick={() => setCartOpen(!cartOpen)} className={
                        `nav__binBlock $ {cartOpen && 'active'}`}>
                        <FaShoppingCart className='nav__bin' />
                        {
                            Boolean(props.orders.length) &&
                            <span className='nav__counter noselect'>{props.orders.length}</span>
                        }

                    </div>
                    <li className="nav__item">About adidas</li>
                </ul>

                <CSSTransition in={cartOpen} timeout={500} classNames="orders-anim" unmountOnExit>
                    {printOrders(props)}
                </CSSTransition>
            </div>
        </header>
    )
}


