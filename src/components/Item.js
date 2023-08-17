import React, { Component } from 'react'
import { LuRussianRuble } from 'react-icons/lu';
//import { CSSTransition } from "react-transition-group"
import { CSSTransition } from 'react-transition-group';
//import img from '../img/1.jpg';
//import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // ES5 with npm
function switchShowProduct() {

}

export class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition in={this.props.item.showItem}
                timeout={500}
                classNames="fade"
                unmountOnExit>
                <div className='shop__item shop-item'>
                    <img className='shop-item__img' /*src={img}*/ src={"./img/" + this.props.item.img} alt="alt" />
                    <h2>{this.props.item.title}</h2>
                    <p className='shop-item__desc'>{this.props.item.desc}</p>
                    <div className="shop-item__block-for-active">
                        <p className='shop-item__price'>
                            {this.props.item.price}
                            <LuRussianRuble />
                        </p>
                        <div className='btn noselect' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Item