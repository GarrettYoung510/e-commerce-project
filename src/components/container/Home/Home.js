import React, { Component } from 'react';
// Import axios to call backend
import axios from 'axios';
// Import the ProductCard that will be responsible for rendering each product
import ProductCard from '../../presentational/ProductCard/ProductCard';
// Import the loader that is used when the data is being retrieved
import Loader from '../../presentational/Loader/Loader';
// Import css file for styling
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            // Have a products and loading
            // products holding all your products
            products: [],
            // loading for when loader is shown
            // set it true, and when data is retrieve set to false.
            loading: true
        }
    }
    componentDidMount() {
        axios.get('/api/products').then(res => {
            // Always have console.logs for debugging
            console.log('res.data products-----------', res.data);
            ///// Set loading to false, and products to the res.data, since we are doing res.send in our backend
            this.setState({ products: res.data, loading: false });
            // Each .then must have a .catch to catch errors
        }).catch(err => console.log('Read all products Error-------', err));
    }
    render() {
        // Destruct the products, loading from state
        const { products, loading } = this.state;
        // If it's done loading return HTML otherwise return the loading indicator
        if (!loading) {
            return (
                <div className='home container'>
                    <div className='home-products container'>
                        {/* If the products have data return products else return nothing using terinary statement */}
                        {products.length ? products.map(product => <ProductCard key={product.id} {...product} />) : null}
                    </div>
                </div>
            );
        } else {
            // Render Loader 
            return <Loader />
        }
    }
}