import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Product = props => {
  const [product, setProduct] = useState({});
  //   default state for error is false
  const [relatedProduct, setRelatedProduct] = useState([]);
  // eslint-disable-next-line 
  const [error, setError] = useState(false);

  const loadSingleProduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
    // run props after so it rerenders that portion when interacted with
  }, [props]);

  return (
    <Layout
      title="True Hermit Essentials"
      description={
        product && product.name
      }
      className="container-fluid"
    >
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4 mb-3 mr-3">
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
          <h4>Related products</h4>
          {/* map function always takes in a key */}
          {relatedProduct.map((p, i) => (
            <div className="col-xs-12 mb-3">
              <Card key={i} product={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
