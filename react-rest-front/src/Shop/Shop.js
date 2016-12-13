import React from 'react';
const axios = require('axios');



class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            quantity: 0,
            totalprice: 0,
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(index) {
        let selectproduct = this.props.products
        window.location.href = '/view/' + selectproduct[index].name;
        // stopPropagation();
        // console.log(index)
    }


    // handleAddButton(i) {
    //     let quantity = this.state.quantity + 1;
    //     let productPrice = this.state.products[i].price;
    //     let totalProducts = this.state.totalprice;
    //     totalProducts = totalProducts + productPrice;
    //     // console.log(totalProducts)
    //     this.setState({
    //         quantity: quantity,
    //         totalprice:totalProducts

    //     })
    //     // console.log(this.state.totalprice)
    // }


    render() {
        console.log(this.props.products)


        let productArray = [];
        for (let i = 0; i < this.props.products.length; i++) {
            productArray.push(<ProductItem key={i} index={i} handleClick={() => { this.handleClick(i) } } product={this.props.products[i]} handleAddButton={this.props.handleAddButton} />)
        }
        return (
            <div className="container background">
                <div className="row">
                    {productArray}

                </div>
            </div>
        )
    }
}



class ProductItem extends React.Component {
    render() {
        let thumbnailcolor = ""
        if (this.props.product.strain_category == "hybrid") {
            thumbnailcolor = "thumbnail hybrid"
        } else if (this.props.product.strain_category == "indica") {
            thumbnailcolor = "thumbnail indica"
        } else if (this.props.product.strain_category == "sativa") {
            thumbnailcolor = "thumbnail sativa"
        }

        // console.log(productArray)
        return (

            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className={thumbnailcolor} onClick={this.props.handleClick} >
                    <img src={this.props.product.imagePath} alt="..." />
                    <div className="caption">
                        <h3>{this.props.product.name.replace(/_/g, " ")}</h3>
                        <p>{this.props.product.strain_category}</p>
                        <div>
                            <div className="price">${this.props.product.price}</div>
                            <p><a className="btn btn-primary" role="button" onClick={(evt) => { this.props.handleAddButton(this.props.index, evt) } }>Add to Cart</a></p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Shop;