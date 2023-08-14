import React, { Component } from 'react'
import Item from './Item'
import Filter from './Filter'

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: "Всё" }

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
                                <Filter key={el.id} filter={el.name} selectFilter={this.selectFilter} />
                            ))
                        }
                    </div>
                    <div className="shop__items">
                        {
                            this.props.items
                                .filter(el => el.category === this.state.filter || this.state.filter === "Всё")
                                .map((el) => {
                                    return (
                                        <Item
                                            key={el.id} item={el} onAdd={this.props.onAdd}
                                        />
                                    );
                                })


                            /*this.props.items.map(el => (
                        <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                        ))*/
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Shop