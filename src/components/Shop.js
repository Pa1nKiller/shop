import React, { Component } from 'react'
import Item from './Item'

export class Shop extends Component {
    render() {
        return (
            <section className="shop" >
                <div className="shop__container">
                    <div className="shop__items">
                        {this.props.items.map(el => (
                            <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop