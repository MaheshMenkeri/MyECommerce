import { useEffect, useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import FooterBanner from './components/FooterBanner';
import { client } from '../lib/client';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {

  const [products, setProducts] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBannerData("banner===");
        const productQuery = '*[_type=="product"]';
        const bannerQuery = '*[_type=="banner"]';
  
        const productsData = await client.fetch(productQuery);
        const banner = await client.fetch(bannerQuery);
  
        console.log(bannerData);
        setProducts(productsData);
        setBannerData(banner);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  


  return (
    <>
    <Navbar />

    <HeroBanner heroBanner={bannerData[0]} />
    {
    // console.log("bannerData[0]=")
    console.log(bannerData[0])
    }

    <div className='products-heading'>
      <h2>Best selling products</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque nemo pariatur sequi ad laboriosam facilis fugit cum, aliquid ab eaque unde quisquam eius labore reiciendis voluptas quam velit blanditiis.</p>
    </div>
    <div className='products-container'>
      {products?.map((product) =>  <Product key={product.id} product1={product} /> )}
    </div>
    <FooterBanner footerBanner={bannerData[0]} />
    </>
  )
}


export default App
