export interface Product {
  id: string;
  name: string | null;
  image?: string;
  price: number;
}

export interface ProductImage {
  id: string[];
  image: string;
}
