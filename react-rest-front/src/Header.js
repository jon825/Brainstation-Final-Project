import React from 'react';
const axios = require('axios');
import {Router, Route, browserHistory, Link} from 'react-router';


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            products: ['hello', 'hi', 'gay'],
            quantity: 0,
            totalprice: 0,
        }
        this.handleAddButton = this.handleAddButton.bind(this)

    };
    componentWillMount() {
        axios.get('/strains')
            .then(res => {
                let products = res.data;
                this.setState({
                    products: products

                })
            })
    };

    handleAddButton(i, e) {
        let quantity = this.state.quantity + 1;
        let productPrice = this.state.products[i].price;
        let totalProducts = this.state.totalprice;
        totalProducts = totalProducts + productPrice;
        // console.log(totalProducts)
        this.setState({
            quantity: quantity,
            totalprice: totalProducts

        })
        e.stopPropagation()
        console.log(e)
    }




    render() {
        let products = this.state.products
        // console.log(this.props.products)
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/index">Green Leaf</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to ="/shoppingcart">Shopping Cart</Link></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User Management <span className="caret"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {React.cloneElement(this.props.children, { products: this.state.products, handleAddButton: this.handleAddButton.bind(this), totalprice: this.state.totalprice , quantity: this.state.quantity})}
            </div>
        )
    }
}

export default Header;