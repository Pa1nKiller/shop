import React, { Component } from 'react'
import { LuRussianRuble } from 'react-icons/lu';
export class Item extends Component {
    render() {
        return (
            <div className='shop__item shop-item'>
                <img src={"./img/" + this.props.item.img} alt="alt" />
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
        )
    }
}

export default Item