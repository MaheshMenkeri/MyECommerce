import React from 'react';
import { Link } from "react-router-dom";
import { urlFor } from '../../lib/client';

const Product = ({product1}) => {
  console.log("product in product.jsx=");
  console.log(product1);
  return (
    <div>
      <Link to={`/ProductDetails/${product1.slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(product1.image[0])} width={250} height={250} className='product-image' alt="" />
          <p className='product-name'>{product1.name}</p>
          <p className='product-price'>${product1.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
