import React from 'react';

class ShoppingCart extends React.Component {
    constructor() {
        // let price = this.props.totalprice
        super();
        this.state = {

        }

    }


    render() {
        console.log(this.props.totalprice)
        console.log(this.props.quantity)
        return (
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Quantity:</strong>
                            <h2>{this.props.quantity}</h2>
                            <strong>Total Price:</strong>
                            <h2>${this.props.totalprice}</h2>
                            <h2>{this.props.products}</h2>

                        </li>
                    </ul>
                </div>
            </div>


        );
    };
};

export default ShoppingCart;