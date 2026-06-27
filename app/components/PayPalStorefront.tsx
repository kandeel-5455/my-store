"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalStorefront() {
  const product = {
    id: "tech-phone-01",
    name: "هاتف ذكي فائق الأداء Pro",
    price: "150.00",
    currency: "USD",
    description:
      "أحدث هاتف ذكي متكامل بكاميرا احترافية بدقة 108 ميجابكسل وبطارية تدوم يومين مع تقنية الشحن السريع.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
        <h1 className="mb-6 border-b pb-4 text-center text-2xl font-bold text-gray-900">
          متجر المنتجات التقنية
        </h1>

        <div className="flex flex-col items-center">
          <img
            className="mb-4 h-52 w-full rounded-xl object-cover shadow-sm"
            src={product.image}
            alt={product.name}
          />
          <div className="w-full text-center">
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-2 px-2 text-sm leading-relaxed text-gray-500">
              {product.description}
            </p>
            <div className="my-5">
              <span className="text-3xl font-extrabold text-blue-600">
                ${product.price}
              </span>
              <span className="mr-1 text-sm font-semibold text-gray-500">
                {product.currency}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <PayPalScriptProvider
            options={{
              clientId:
                "BAAjV8vN7EXfHK0soOekdKmQa6Of6lw-X5ojp5uwS88VIRZimQ5-LtQt85riwNXnWsRxOCbEgXhr5VXVfg",
              currency: product.currency,
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical", shape: "rect", label: "checkout" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      reference_id: product.id,
                      amount: {
                        currency_code: product.currency,
                        value: product.price,
                      },
                      description: product.name,
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  const details = await actions.order.capture();
                  const customerName = details.payer?.name?.given_name ?? "العميل";
                  alert(`تمت عملية الشراء بنجاح! شكراً لك ${customerName}`);

                  await fetch("/api/webhook/paypal", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ orderId: data.orderID, details }),
                  });
                }
              }}
              onError={(err) => {
                console.error("PayPal Checkout Error: ", err);
                alert("حدث خطأ أثناء معالجة عملية الدفع المالي. يرجى المحاولة مرة أخرى.");
              }}
            />
            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-center text-sm text-blue-800">
              <p className="font-bold">🔥 14 شخصاً يشاهدون هذا العرض الآن!</p>
              <p className="mt-1">تم بيع 42 قطعة خلال الـ 24 ساعة الماضية.</p>
              <p className="mt-2 text-xs text-gray-600">
                شحن سريع ومجاني - ضمان استرجاع الأموال
              </p>
            </div>
          </PayPalScriptProvider>
        </div>
      </div>
    </main>
  );
}
