import React, { Component } from 'react'
import Item from './Item'

export class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { filter: "Всё", products: this.props.items }
        this.selectFilter = this.selectFilter.bind(this)
    }

    selectFilter(filter) {
        this.setState({ filter: filter });
    }

    render() {
        return (
            <section className="shop" >
                <div className="shop__container">
                    <div className="shop__filters filters">
                        {
                            this.props.filters.map(el => (
                                <p className='filters__item' key={el.id} onClick={() => {
                                    this.selectFilter(el.name)
                                }}>
                                    {el.name}
                                </p >
                            ))
                        }
                    </div>
                    <div className="shop__items">
                        {
                            this.state.products
                                .filter(el => el.category === this.state.filter || this.state.filter === "Всё")
                                .map((el) => {
                                    return (
                                        <Item
                                            key={el.id} item={el} onAdd={this.props.onAdd}
                                        />
                                    );
                                })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop