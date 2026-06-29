import { products } from './products';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Muscle Up Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '12px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            <p><strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
            <p style={{ fontWeight: 'bold', color: '#333' }}>
              Price: ${product.price} <span style={{ fontSize: '0.8em', color: '#666' }}>(Any size/color)</span>
            </p>
            <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px', borderRadius: '5px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
