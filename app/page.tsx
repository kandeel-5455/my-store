'use client';

import { useEffect, useId } from 'react';
import { products } from './products';

const PayPalButton = ({ price }: { price: number }) => {
  const containerId = useId().replace(/:/g, '');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const paypal = (window as Window & {
        paypal?: {
          Buttons: (options: any) => {
            render: (selector: string) => void;
          };
        };
      }).paypal;

      if (paypal) {
        paypal
          .Buttons({
            createOrder: (_data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: price.toString() } }],
              });
            },
            onApprove: (_data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                alert('تمت عملية الشراء بنجاح! شكراً لك ' + details.payer.name.given_name);
              });
            },
          })
          .render(`#${containerId}`);
      }
    };
  }, [containerId, price]);

  return <div id={containerId} style={{ marginTop: '10px' }} />;
};

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Muscle Up Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '200px' }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <PayPalButton price={product.price} />
          </div>
        ))}
      </div>
    </main>
  );
}
