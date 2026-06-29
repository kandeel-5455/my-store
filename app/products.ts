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
    name: "Muscle-Up Fitness Tee",
    price: 35.0,
    category: "Fitness",
    description: "Built for heavy lifting and durability.",
    sizes: ["M", "L", "XL", "XXL"],
    image: "/black-tshirt.jpg",
  },
  {
    id: 2,
    name: "Muscle-Up Cardio Pro",
    price: 35.0,
    category: "Cardio",
    description: "Lightweight and breathable for high-intensity running.",
    sizes: ["M", "L", "XL", "XXL"],
    image: "/blue-tshirt.jpg",
  },
];
