import React from 'react';
const axios = require('axios');



class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []

        }
        this.handleClick = this.handleClick.bind(this)

    }
    componentWillMount() {
        axios.get('http://localhost:3005/strains')
            .then(res => {
                let products = res.data;
                this.setState({
                    products: products

                })
            })
    }
    handleClick(index) {
        let selectproduct = this.state.products
        window.location.href = '/view/' + selectproduct[index].name

        console.log(index)
    }

    render() {



        let productArray = [];
        for (let i = 0; i < this.state.products.length; i++) {
            productArray.push(<ProductItem key={i} handleClick={() => { this.handleClick(i) } } product={this.state.products[i]} />)
        }
        return (
            <div className="container">
                <div className="row">
                    {productArray}

                </div>
            </div>
        )
    }
}



class ProductItem extends React.Component {
    render() {

        // console.log(productArray)
        return (

            <div className="col-sm-6 col-md-4">
                <div className="thumbnail" onClick={this.props.handleClick} >
                    <img src={this.props.product.imagePath} alt="..." />
                    <div className="caption">
                        <h3>{this.props.product.name.replace(/_/g, " ")}</h3>
                        <p>{this.props.product.strain_category}</p>
                        <div>
                            <div className="price">${this.props.product.price}</div>
                            <a className="btn btn-primary" role="button">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Shop;