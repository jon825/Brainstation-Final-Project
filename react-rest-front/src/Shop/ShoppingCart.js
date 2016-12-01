import React from 'react';

class ShoppingCart extends React.Component{
    constructor(){
        super();
        this.state={
            quantity:0,
            price:0
        }

    }

    
    render(){
        console.log(this.props.products)
        return(
            <div>
            Shopping Cart

            </div>


        );
    };
};

export default ShoppingCart;