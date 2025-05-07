'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import SidebarFilters from './components/SidebarFilters';
import Footer from './components/Footer';




export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <main style={{ padding: '1rem' }}>
      <Navbar />
      <Hero />
      <SidebarFilters />
      


      {/* Product Listing Section */}
      <h1 style={{ fontSize: '2rem', margin: '2rem 0 1rem' }}>Product Listing</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

      
            <Footer/>

    </main>
  );
}
