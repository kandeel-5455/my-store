import { products } from './products';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Muscle Up Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2>{product.name}</h2>
            <p style={{ color: '#666' }}>{product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <p><strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
            <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
