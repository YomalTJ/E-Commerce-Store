import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: 1,
    name: 'Smartphone X',
    price: 799.99,
    description: 'High-end smartphone with advanced features',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Noise-cancelling wireless headphones',
    image: 'https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Laptop Pro',
    price: 1299.99,
    description: 'Powerful laptop for professionals',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEkZHonygfe8BcyJhqj7wMcSf7mnEcSQNog&s',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 249.99,
    description: 'Advanced fitness and health tracking smartwatch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7CPz4T_TiHY11j2vtbvkwkHqJ6jkumoPeg&s',
    category: 'Wearables'
  },
  {
    id: 5,
    name: 'Gaming Keyboard',
    price: 149.99,
    description: 'Mechanical RGB keyboard designed for gamers',
    image: 'https://gamextreme.ph/cdn/shop/files/1_6f41a2ad-178a-460b-938c-0545e67c2490_1024x1024.png?v=1693458048',
    category: 'Electronics'
  },
  {
    id: 6,
    name: '4K Ultra HD TV',
    price: 599.99,
    description: 'Stunning 4K Ultra HD resolution with smart features',
    image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/de0d3686-4766-11ee-8cfb-8ee861fd9236.jpg',
    category: 'Electronics'
  },
  {
    id: 7,
    name: 'Portable Bluetooth Speaker',
    price: 99.99,
    description: 'Compact speaker with powerful sound and waterproof design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqUYomKQuO4iq_W8elyckfa-HZ4pC2sWWsg&s',
    category: 'Audio'
  },
  {
    id: 8,
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with adjustable DPI',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SLqBip98Z9hxOeN_GCBm0qfca2NnDM_q1g&s',
    category: 'Accessories'
  },
  {
    id: 9,
    name: 'Smart Thermostat',
    price: 149.99,
    description: 'Energy-efficient thermostat with smart home integration',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrOPiMCFo6EwCLp5DwaQQNFYmm_T03yRoPA&s',
    category: 'Smart Home'
  },
  {
    id: 10,
    name: 'Fitness Tracker Band',
    price: 59.99,
    description: 'Lightweight band with fitness and sleep tracking features',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdv6CXo0ZJoUk7J7xmpx2cjLisWeLd15z9A&s',
    category: 'Wearables'
  },
  {
    id: 11,
    name: 'DSLR Camera',
    price: 999.99,
    description: 'Professional DSLR camera with high-resolution image capture',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf3b90pch4yvUOfbbRXw_ix_sfpwsyQDbtA&s',
    category: 'Photography'
  },
  {
    id: 12,
    name: 'Electric Scooter',
    price: 349.99,
    description: 'Foldable electric scooter with long battery life',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5S_U7O6-rOVABnFVkJiOd4ja2C1_vawpyw&s',
    category: 'Transportation'
  }
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialProducts,
    filteredItems: initialProducts,
    searchTerm: '',
    selectedCategory: 'All'
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = state.items.filter(
        product => 
          product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = action.payload === 'All'
        ? state.items
        : state.items.filter(product => product.category === action.payload);
    }
  }
});

export const { 
  setSearchTerm, 
  filterByCategory 
} = productSlice.actions;

export default productSlice.reducer;