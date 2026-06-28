import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عنوان متجرك',
  description: 'وصف متجرك هنا',
  // إذا كنت تستخدم openGraph، يجب أن يكون بهذا الشكل:
  openGraph: {
    title: 'عنوان متجرك',
    description: 'وصف متجرك هنا',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>رحباً بكم في متجرنا</h1>
      <p>سنبدأ باستقبال الطلبات</p>
    </div>
  );
}
