import { Product } from "../interfaces/interfaces";

const product1 = {
    id: '1',
    title: 'Coffee 1',
    image: './coffee-mug.png'
  }
  
  const product2 = {
    id: '2',
    title: 'Coffee 2',
    image: './coffee-mug2.png'
  }
  
export const products: Product[] = [ product1, product2 ];