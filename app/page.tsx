import PayPalStorefront from "./components/PayPalStorefront";

export const metadata = {
  title: "متجر (اسم متجرك) - أفضل المنتجات التقنية بأفضل سعر",
  description:
    "تسوق أحدث المنتجات التقنية، ضمان حقيقي، شحن سريع لجميع المحافظات. اطلب الآن.",
  keywords:
    "أجهزة إلكترونية، هاتف ذكي، متجر تقني، تسوق أونلاين، شحن سريع، ضمان",
  openGraph: {
    title: "متجر (اسم متجرك)",
    description: "أفضل العروض التقنية في مصر.",
    url: "https://yourwebsite.com",
    siteName: "اسم متجرك",
  },
};

export default function Home() {
  return <PayPalStorefront />;
}
