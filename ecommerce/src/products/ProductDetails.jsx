import React from 'react';
import { client, urlFor } from '../../lib/client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product.jsx';

// import { urlFor } from '../../lib/client';

import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext.jsx';
import Navbar from '../components/Navbar.jsx';

const ProductDetails = (props) => {
  const [product1, setproduct1] = useState();
  const [products1, setproducts1] = useState();
  const [index, setIndex] = useState(0);
  const { slug } = useParams();
  const { decQty, incQty, qty, onAdd } = useStateContext();

  useEffect(() => {

    const fetchData = async () => {
      console.log("runing..");

      try {
        const query = `*[_type=="product" && slug.current == '${slug}'][0]`; // && slug.current == '${slug}'
        const productData1 = await client.fetch(query);
        const productQuery = '*[_type=="product"]';
        const productsData = await client.fetch(productQuery);

        setproduct1(productData1);
        setproducts1(productsData);
        console.log("prod==");
        console.log(products1);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [2]);


  return (
    <>
      <Navbar />


      <div>
        <div className='product-detail-container'>
          <div>
            <div className='image-container'>
              {product1 && product1?.image && (
                <img src={urlFor(product1.image[index]?.asset)} alt="" />
              )}

            </div>
            <div className='small-images-container'>
              {product1?.image?.length > 0 ? (
                product1.image.map((item, i) => (
                  item?.asset && ( // Check if item and item.asset are defined
                    <img
                      key={i}
                      src={urlFor(item.asset)}
                      alt={`image ${i}`} // Improved alt text
                      className={i === index ? 'small-image selected-image' : 'small-image'}
                      onMouseEnter={() => setIndex(i)}
                    />
                  )
                ))
              ) : (
                <p>No images available</p> // Fallback content if no images
              )}
              {/* {
              product1?.image?.map((item,i) => {
                console.log("item1 =" +i);
                console.log(item);
                <img src={urlFor(item?.asset)} alt="image" 
                className={i == index ?'small-image  selected-image' : 'small-image'} 
                onMouseEnter={() => setIndex(i)} />

              })
            } */}
            </div>
          </div >

          <div className='product-detail-desc'>
            {/* <h1>{product1.name}</h1> */}
            <div className='reviews'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>(20)</p>


            </div>
            <h4>Details:</h4>
            <p>{product1?.details}</p>
            <p className='price'>${product1?.price}</p>
            <div className='quantity'>
              <p className='quantity-desc'>
                <span className="minus" onClick={decQty}><AiOutlineMinus /> </span>
                <span className="num" >{qty} </span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /> </span>

              </p>
            </div>
            <div className='buttons'>
              <button type='button' className='add-to-cart' onClick={() => onAdd(product1, qty)}>Add to Cart</button>
              <button type='button' className='buy-now' onClick={""}>Buy Now</button>
            </div>

          </div>
        </div>

        <div className='maylike-products-wrapper'>
          <h2>You mya also like </h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products1?.map((item) => (
                <Product key={item._id} product1={item} />

              ))
              }


            </div>

          </div>


        </div>
      </div>
    </>
  )
}




export default ProductDetails
