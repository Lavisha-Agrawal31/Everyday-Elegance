import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import img1  from '../assets/img1.png';
import img2  from '../assets/img2.png';
import img3  from '../assets/img3.png';

const categories = ['Top', 'Bottom', 'Dress', 'Set', 'Knit', 'Outer'];

const productsByCategory = {
  Top: [
    { id: 1, name: 'Eto V Neck Yellow', price: 'Rp. 129.000', image: img1 },
    { id: 2, name: 'Wave Stripe Hally', price: 'Rp. 130.000', image: img2 },
    { id: 3, name: 'Floral Waffle Tee', price: 'Rp. 119.000', image: img3 },
    { id: 1, name: 'Eto V Neck Yellow', price: 'Rp. 129.000', image: img1 },
    { id: 2, name: 'Wave Stripe Hally', price: 'Rp. 130.000', image: img2 },
    { id: 3, name: 'Floral Waffle Tee', price: 'Rp. 119.000', image: img3 },
  ],
  Bottom: [
    { id: 4, name: 'Denim Straight Jeans', price: 'Rp. 259.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 5, name: 'Pleated Mini Skirt', price: 'Rp. 189.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 6, name: 'Wide Leg Trousers', price: 'Rp. 229.000', image: '/placeholder.svg?height=300&width=300' },
  ],
  Dress: [
    { id: 7, name: 'Floral Maxi Dress', price: 'Rp. 299.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 8, name: 'Wrap Midi Dress', price: 'Rp. 259.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 9, name: 'Sleeveless Shift Dress', price: 'Rp. 219.000', image: '/placeholder.svg?height=300&width=300' },
  ],
  Set: [
    { id: 10, name: 'Blazer and Shorts Set', price: 'Rp. 399.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 11, name: 'Crop Top and Skirt Set', price: 'Rp. 329.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 12, name: 'Pajama Style Set', price: 'Rp. 279.000', image: '/placeholder.svg?height=300&width=300' },
  ],
  Knit: [
    { id: 13, name: 'Cable Knit Sweater', price: 'Rp. 279.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 14, name: 'Ribbed Cardigan', price: 'Rp. 249.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 15, name: 'Turtleneck Pullover', price: 'Rp. 229.000', image: '/placeholder.svg?height=300&width=300' },
  ],
  Outer: [
    { id: 16, name: 'Oversized Denim Jacket', price: 'Rp. 359.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 17, name: 'Trench Coat', price: 'Rp. 499.000', image: '/placeholder.svg?height=300&width=300' },
    { id: 18, name: 'Cropped Leather Jacket', price: 'Rp. 599.000', image: '/placeholder.svg?height=300&width=300' },
  ],
};

export default function OurProducts() {
  const [activeCategory, setActiveCategory] = useState('Top');

  return (
    <section className="container mx-auto px-12 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      
      <div className="flex justify-center space-x-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? 'bg-gray-200 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4 py-4 rounded-lg">
        {productsByCategory[activeCategory].map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="inline-flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          SEE MORE
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
}