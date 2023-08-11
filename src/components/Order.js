import React, { Component } from 'react'
import { LuRussianRuble } from 'react-icons/lu';
export class Order extends Component {
    render() {
        return (
            <div className='order-item'>
                <img className='order-item__img' src='../img/1.jpg' alt="alt" />
                <div className="order-item__cross">
                    <h2>{this.props.item.title}</h2>
                    <div className="order-item__block-for-active">
                        <p className='order-item__price'>
                            {this.props.item.price}
                            <LuRussianRuble />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order

//src={"./img/" + this.props.item.img}