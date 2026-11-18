import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client';

const Product = ({ product1 }) => {
  if (!product1) return null;
  const image = product1.image?.[0]
    ? urlFor(product1.image[0]).width(900).height(900).fit('max').auto('format').quality(90).url()
    : '';
  const slug = product1.slug?.current || product1.slug;

  return (
    <Link to={slug ? `/ProductDetails/${slug}` : '#products'} className="product-card">
      <div className="product-image-wrap">
        {image ? <img src={image} className="product-image" alt={product1.name || 'Audio product'} loading="lazy" decoding="async" />
          : <div className="product-image-placeholder">JSM AUDIO</div>}
        <span className="product-quick-view">View product <span aria-hidden="true">↗</span></span>
      </div>
      <div className="product-card-info">
        <p className="product-name">{product1.name}</p>
        <p className="product-price">${product1.price}</p>
      </div>
    </Link>
  );
};

export default Product;
