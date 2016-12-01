import React from 'react';

class ShoppingCart extends React.Component{
    constructor(){
        // let price = this.props.totalprice
        super();
        this.state={
     
        }

    }

    
    render(){
        console.log(this.props.totalprice)
        console.log(this.props.quantity)
        return(
            <div>
            Shopping Cart
            {this.props.totalprice}
            {this.props.quantity}
            </div>


        );
    };
};

export default ShoppingCart;