import React from 'react';

function ShopItem({ item, addToCart }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={item.image} alt={item.name} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <h5>${item.price}</h5>
          <button onClick={() => addToCart(item)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;