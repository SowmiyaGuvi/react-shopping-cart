import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h4>Shopping Cart</h4>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="mb-2">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm ml-2">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;