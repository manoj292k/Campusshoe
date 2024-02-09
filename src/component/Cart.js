import React from "react";

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
            <div>
                <h3>No product found in the cart.</h3>
                <h1>Shop Now</h1>
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
                    <button onClick={() => clearCart(item.id)}>
                        <box-icon name='x' color='#ffffff' ></box-icon>
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
