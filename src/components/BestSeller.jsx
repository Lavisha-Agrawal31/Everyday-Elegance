import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const products = [
  { id: 1, name: 'Euphoria Crop Blouse', price: 'Rp. 125.000', image: img1 },
  { id: 2, name: 'Venus Halter Dress', price: 'Rp. 180.000', image: img2 },
  { id: 3, name: 'Snap Pure Blouse', price: 'Rp. 129.000', image: img3 },
  { id: 4, name: 'Summer Breeze Top', price: 'Rp. 135.000', image: img1 },
  { id: 5, name: 'Coastal Charm Dress', price: 'Rp. 195.000', image: img3 },
  { id: 6, name: 'Charm Dress', price: 'Rp. 195.000', image: img2 },
  { id: 7, name: 'Coastal Dress', price: 'Rp. 195.000', image: img1 }
];

export default function BestSeller() {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="container mx-auto px-12 py-8">
      <h2 className="text-3xl font-bold text-center mb-14">Our Best Seller</h2>
      <div className="relative">
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
          ))}
        </div>
        {showLeftButton && (
          <button onClick={() => scroll(-300)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {showRightButton && (
          <button onClick={() => scroll(300)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
}