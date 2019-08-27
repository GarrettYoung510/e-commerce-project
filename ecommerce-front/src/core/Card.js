import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    {/* Add product's image */}
                    <ShowImage item={product} url="product" />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    {/* Link to be redirected to view more information on product */}
                    <Link to="/">
                        <button className="btn btn-outline-primary mt-2 mb-2">
                            View Product
                        </button>
                        {/* Link to be redirected to add item(s) to your cart */}
                    </Link>
                    <button className="btn btn-outline-warning mt-2 mb-2">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;