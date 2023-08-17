import React, { Component } from 'react'
import { LuRussianRuble } from 'react-icons/lu';
import { CSSTransition } from 'react-transition-group';

export class Order extends Component {
    render() {
        return (
            <CSSTransition in={this.props.item.showItem}
                timeout={500}
                classNames="fade"
                unmountOnExit>
                <div className='order-item'>
                    <img className='order-item__img' src={"./img/" + this.props.item.img} alt="alt" />
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
            </CSSTransition>
        )
    }
}

export default Order