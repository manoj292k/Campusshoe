import React from "react";
import { Link } from "react-router-dom";
function Cart({ cartItems, clearCart }) {
    const totalAmount = cartItems.reduce((total, item) => {
        if (typeof item.Price === 'number' && !isNaN(item.Price)) {
            return total + item.Price;
        } else {
            // Handle invalid or missing prices
            return total;
        }
    }, 0);    if (cartItems.length === 0) {
        return (
            <div className="Noprocart">
                <h3>No product found in the cart.</h3>
                <button><Link to="/Kids">SHOP NOW</Link></button>
            </div>
        );
    }

    return (
        <div className="Cartcontainer">
            {cartItems.map((item) => (
                <div className='Cartitems' key={item.id}>
                    <img src={item.img} alt={item.Name} />
                    <h6>{item.Name}</h6>
                    <p> ₹ {item.Price} - Only</p>
                    <p>{item.Color}</p>
                    <button className="cartremovebtn" onClick={() => clearCart(item.id)}>
                    <box-icon type='solid' name='trash'></box-icon>
                    </button>
                </div>
            ))}
            <div>
                <h1>Total Amount: ₹{totalAmount}/-</h1>
            </div>
        </div>
    );
}

export default Cart;
