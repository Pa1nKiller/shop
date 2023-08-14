import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

export function getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
            return i;
        }
    }
    return -1;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: "Pro Model 2G",
                    img: "2.jpg",
                    desc: `adidas Кроссовки Pro Model 2G CBLACK/FTWWHT/CBLACK 
                            Страна производства	Вьетнам
                            Материал подкладки обуви	искусственный материал
                            Полнота обуви (EUR)	F (6)
                            Материал подошвы обуви	искусственный материал
                            Материал стельки	текстиль
                            Пол	Мужской`,
                    category: "Кроссовки",
                    price: 7439,
                    count: 1
                },
                {
                    id: 2,
                    title: "Pro Model 2G",
                    img: "ProModel2G.png",
                    desc: `adidas Кроссовки Pro Model 2G CBLACK/FTWWHT/CBLACK 
                            Страна производства	Вьетнам
                            Материал подкладки обуви	искусственный материал
                            Полнота обуви (EUR)	F (6)
                            Материал подошвы обуви	искусственный материал
                            Материал стельки	текстиль
                            Пол	Мужской`,
                    category: "Кроссовки",
                    price: 8000,
                    count: 1
                },
                {
                    id: 3,
                    title: "Pro Model 2G",
                    img: "1.jpg",
                    desc: `adidas Кроссовки Pro Model 2G CBLACK/FTWWHT/CBLACK 
                            Страна производства	Вьетнам
                            Материал подкладки обуви	искусственный материал
                            Полнота обуви (EUR)	F (6)
                            Материал подошвы обуви	искусственный материал
                            Материал стельки	текстиль
                            Пол	Мужской`,
                    category: "Кроссовки",
                    price: 8000,
                    count: 1
                },
                {
                    id: 4,
                    title: "Pro Model 2G",
                    img: "3.jpg",
                    desc: `adidas Кроссовки Pro Model 2G CBLACK/FTWWHT/CBLACK 
                            Страна производства	Вьетнам
                            Материал подкладки обуви	искусственный материал
                            Полнота обуви (EUR)	F (6)
                            Материал подошвы обуви	искусственный материал
                            Материал стельки	текстиль
                            Пол	Мужской`,
                    category: "Кроссовки",
                    price: 8000,
                    count: 1
                },
                {
                    id: 5,
                    title: "4",
                    img: "4.jpg",
                    desc: `adidas`,
                    category: "Футболки",
                    price: 3000,
                    count: 1
                },
                {
                    id: 6,
                    title: "5",
                    img: "5.jpg",
                    desc: `adidas`,
                    category: "Футболки",
                    price: 3000,
                    count: 1
                },
                {
                    id: 7,
                    title: "6",
                    img: "6.jpg",
                    desc: `adidas`,
                    category: "Футболки",
                    price: 3000,
                    count: 1
                }
            ],
            filters: [{ id: 1, name: "Всё" }, { id: 2, name: "Кроссовки" }, { id: 3, name: "Футболки" }]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.removeFromOrder = this.removeFromOrder.bind(this)
    }
    render() {
        return (
            <div className="wrapper" >
                <Header orders={this.state.orders} onRemove={this.removeFromOrder} />
                <main className="main">
                    <Shop filters={this.state.filters} items={this.state.items} onAdd={this.addToOrder} />
                </main>
                <Footer />
            </div>
        )
    }

    addToOrder(item) {
        const i = getIndex(item.id, this.state.orders, 'id');
        if (i > -1) {
            this.state.orders[i].count = this.state.orders[i].count + 1;
            this.setState({ orders: this.state.orders });
        } else {
            this.setState({ orders: [...this.state.orders, item] })
        }
    }

    removeFromOrder(item) {
        const i = getIndex(item.id, this.state.orders, 'id');
        if (item.count > 1 && i > -1) {
            this.state.orders[i].count = this.state.orders[i].count - 1;
            this.setState({ orders: this.state.orders });
        } else {
            const newOrders = [].concat(this.state.orders);
            newOrders.splice(i, 1);
            this.setState({ orders: newOrders });
        }
    }
}

export default App;