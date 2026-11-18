import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../lib/client';

const FooterBanner = ({ footerBanner }) => {
  if (!footerBanner) return null;
  const image = footerBanner.image?.asset
    ? urlFor(footerBanner.image).width(900).fit('max').auto('format').quality(90).url()
    : null;
  const slug = footerBanner.product?.slug?.current || footerBanner.product?.slug || footerBanner.product;

  return (
    <section className="footer-banner-container">
      <div className="footer-banner-content">
        <div className="footer-banner-copy">
          <span className="eyebrow light-eyebrow">{footerBanner.discount || 'SPECIAL OFFER'}</span>
          <h2>{footerBanner.largeText1 || 'Make room'}</h2>
          <h2>{footerBanner.largeText2 || 'for better sound.'}</h2>
          <p>{footerBanner.saleTime || 'Limited-time collection'}</p>
        </div>
        {image && <img src={image} className="footer-banner-image" alt="Featured audio product" loading="lazy" decoding="async" />}
        <div className="footer-banner-action">
          <span>{footerBanner.smallText || 'THE JSM EDIT'}</span>
          <h3>{footerBanner.midText || 'Your sound. Your style.'}</h3>
          <p>{footerBanner.desc || 'Find the audio gear that fits your life.'}</p>
          {slug ? <Link to={`/ProductDetails/${slug}`} className="footer-cta">{footerBanner.buttonText || 'Shop now'}</Link>
            : <a href="#products" className="footer-cta">{footerBanner.buttonText || 'Shop now'}</a>}
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
