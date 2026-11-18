import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  if (!heroBanner) {
    return (
      <section className="hero-banner-container hero-fallback">
        <div className="hero-copy">
          <span className="hero-kicker">JSM AUDIO COLLECTION</span>
          <h1>Sound that<br /><em>moves you.</em></h1>
          <p>Discover your next favourite listening experience.</p>
          <a className="hero-cta" href="#products">Explore collection</a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>JSM</span></div>
      </section>
    );
  }

  const image = heroBanner.image?.asset
    ? urlFor(heroBanner.image).width(1400).fit('max').auto('format').quality(92).url()
    : null;
  const slug = heroBanner.product?.slug?.current || heroBanner.product?.slug || heroBanner.product;

  return (
    <section className="hero-banner-container">
      <div className="hero-copy">
        <span className="hero-kicker">{heroBanner.smallText || 'JSM AUDIO COLLECTION'}</span>
        <h1>{heroBanner.midText || 'Sound that moves you.'}</h1>
        <p>{heroBanner.desc || 'Premium audio for every part of your day.'}</p>
        {slug ? <Link className="hero-cta" to={`/ProductDetails/${slug}`}>{heroBanner.buttonText || 'Shop now'}</Link>
          : <a className="hero-cta" href="#products">{heroBanner.buttonText || 'Shop now'}</a>}
      </div>
      {image && <img src={image} alt={heroBanner.midText || 'Featured headphones'} className="hero-banner-image" loading="eager" decoding="async" />}
      <div className="hero-side-note">ENGINEERED FOR<br />YOUR EVERYDAY</div>
    </section>
  );
};

export default HeroBanner;
