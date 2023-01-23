export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Classic wooden chair',
      price: 500,
      description: 'A classis comfy wooden chair'
    },
    {
      id: 2,
      name: 'Side table',
      price: 250,
      description: 'A great side table for decor'
    },
    {
      id: 3,
      name: 'Mirror',
      price: 105,
    }
  ];
  
  