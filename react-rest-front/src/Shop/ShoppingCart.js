import React from 'react';

class ShoppingCart extends React.Component{
    constructor(){
        // let price = this.props.totalprice
        super();
        this.state={
           totalprice:price
        }

    }

    
    render(){
        console.log(this.state.totalprice)
        return(
            <div>
            Shopping Cart
            {this.state.totalprice}
            </div>


        );
    };
};

export default ShoppingCart;