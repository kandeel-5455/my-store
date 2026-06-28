import { products } from './products';

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>مرحباً بكم في متجرنا</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>السعر: ${product.price}</strong></p>
          </div>
        ))}
      </div>
    </main>
  );
}
