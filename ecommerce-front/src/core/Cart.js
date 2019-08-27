import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCart());
    }, []);

    // Render items you've added to your cart
    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add, remove, checkout, or continue shopping."
            className="container-fluid"
        >
            {/* Display message above cart items */}
            <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                {/* Where checkout review will be */}
                <div className="col-6">
                    <p>
                        show checkout options/shipping address/total/update
                        quantity
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;