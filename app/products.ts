export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Muscle-Up Pro Jersey",
    price: 49.99,
    description: "High-performance breathable fabric for intense workouts.",
    sizes: ["S", "M", "L", "XL"],
    image: "/jersey.jpg", // سنقوم لاحقاً بوضع صور فعلية بهذا الاسم في مجلد public
  },
  {
    id: 2,
    name: "Core Compression Shorts",
    price: 29.99,
    description: "Durable and flexible shorts designed for maximum movement.",
    sizes: ["M", "L"],
    image: "/shorts.jpg",
  },
];
