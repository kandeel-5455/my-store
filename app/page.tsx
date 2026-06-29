'use client';
import { products } from './products';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Muscle Up Store</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px' }}>
            <img src={product.image} alt={product.name} style={{ width: '200px' }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div id="paypal-button-container"></div>
          </div>
        ))}
      </div>
      <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`}></script>
    </main>
  );
}
