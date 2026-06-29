export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  sizes: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Muscle-Up Fitness Tee (Black)",
    price: 29.99,
    category: "Fitness",
    description: "High-performance fabric.",
    sizes: ["M", "L", "XL", "XXL"],
    image: "/edited-photos/MuscleUp-TShirt-Black-01.jpeg",
  },
  {
    id: 2,
    name: "Muscle-Up Cardio Pro (Blue)",
    price: 29.99,
    category: "Cardio",
    description: "Lightweight and breathable. Same price for any size or color.",
    sizes: ["M", "L", "XL", "XXL"],
    image: "/MuscleUp-TShirt-Blue-01.jpg",
  },
];
