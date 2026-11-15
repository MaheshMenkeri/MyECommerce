import { useEffect, useState } from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner';
import FooterBanner from './components/FooterBanner';
import { client } from '../lib/client';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const [productsData, banners] = await Promise.all([
          client.fetch('*[_type == "product"]'),
          client.fetch('*[_type == "banner"]')
        ]);
        if (active) {
          setProducts(productsData || []);
          setBannerData(banners || []);
        }
      } catch (err) {
        console.error('Unable to load store data:', err);
        if (active) setError('We could not load the store right now. Please refresh the page.');
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchData();
    return () => { active = false; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="store-main">
        <HeroBanner heroBanner={bannerData[0]} />
        <section className="products-section" id="products">
          <div className="products-heading">
            <span className="eyebrow">CURATED FOR YOUR SOUND</span>
            <h2>Find your perfect sound</h2>
            <p>Explore headphones and audio essentials designed to make every moment sound better.</p>
          </div>
          {loading ? (
            <p className="store-message">Loading products…</p>
          ) : error ? (
            <p className="store-message error-message">{error}</p>
          ) : products.length ? (
            <div className="products-container">
              {products.map((product) => (
                <Product key={product._id || product.id || product.slug?.current} product1={product} />
              ))}
            </div>
          ) : (
            <p className="store-message">Products will be available soon.</p>
          )}
        </section>
        <FooterBanner footerBanner={bannerData[0]} />
      </main>
    </>
  );
}

export default App;
