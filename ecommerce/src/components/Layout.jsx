import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

const Layout = ({children}) => {
  console.log("layout page ................")
  return (
    <div>
      <header>
        {/* <Navbar /> */}
      </header>
      <main className='main-container'>
        <h1>layout page</h1>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>

      
    </div>
  )
}

export default Layout
