import React from 'react';

class ShoppingCart extends React.Component{
    constructor(){
        super();
        this.state={
           
        }

    }

    
    render(){
        console.log(this.props.totalprice)
        return(
            <div>
            Shopping Cart

            </div>


        );
    };
};

export default ShoppingCart;