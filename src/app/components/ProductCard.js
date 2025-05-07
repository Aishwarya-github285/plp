// src/app/components/ProductCard.js
import './Productcard.css';
export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '100%',
      maxWidth: '250px',
    }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{product.title}</h3>
      <p><strong>${product.price}</strong></p>
    </div>
  );
}
