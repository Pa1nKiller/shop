import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    price: 7439
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
                    price: 8000
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
                    price: 8000
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
                    price: 8000
                }
            ]
        }
    }
    render() {
        return (
            <div className="wrapper" >
                <Header />
                <main className="main">
                    <Shop items={this.state.items} />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;