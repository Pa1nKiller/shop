import React, { Component } from 'react'
import { LuRussianRuble } from 'react-icons/lu';

//import img from '../img/1.jpg';

export class Order extends Component {
    render() {
        return (
            <div className='order-item'>
                <img className='order-item__img' /*src={img}*/ src={"./img/" + this.props.item.img} alt="alt" />
                <div className="order-item__cross">
                    <h2>{this.props.item.title}</h2>
                    <div className="order-item__block-for-active">
                        <p className='order-item__price'>
                            {this.props.item.price * this.props.item.count}
                            <LuRussianRuble />
                        </p>
                        <div className='btn noselect' onClick={() => this.props.onRemove(this.props.item)}>-</div>
                    </div>
                    <p className='order-item__col'>
                        Количество: {this.props.item.count}
                    </p>
                </div>
            </div>
        )
    }
}

export default Order