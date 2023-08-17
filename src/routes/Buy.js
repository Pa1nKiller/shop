import React, { Component } from 'react'
import Order from '../components/Order';

export class Buy extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {console.log(this.props.location)}
                {/*this.props.state.map(el => (
                    <Order key={el.id} item={el} onRemove={props.onRemove} />
                ))*/}
            </div>
        )
    }
}

export default Buy