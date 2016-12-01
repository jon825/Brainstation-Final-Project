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
        return(
            <div>
            Shopping Cart
            {this.props.totalprice}
            </div>


        );
    };
};

export default ShoppingCart;