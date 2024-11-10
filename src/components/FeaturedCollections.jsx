import { ChevronRight } from 'lucide-react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const collections = [
  { id: 1, name: 'COLORFUL KNITWEAR SERIES', image: img2, hasMore: true },
  { id: 2, name: 'JIWOO MADE SPECIAL SERIES', image: img1, hasMore: true },
  { id: 3, name: 'FRESHIDER TOP SERIES', image: img1, hasMore: true },
  { id: 4, name: 'TOP PANTS SERIES', image: img3, hasMore: true },
  { id: 5, name: 'SWEET DRESSES SERIES', image: img2, hasMore: true },
];

export default function FeaturedCollections() {
  return (
    <section className="container mx-auto px-12 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Featured Collections</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`relative overflow-hidden ${
              index === 1 ? ' md:row-span-2 h-full' : 'h-60 md:h-64'
            }`}
          >
            <img
              src={collection.image}
              alt={collection.name}
              className={`w-full object-cover rounded-md ${
                index === 1 ? 'h-full' : 'h-full md:h-64'
              }`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
              <h3 className="text-white font-semibold text-sm md:text-base">
                {collection.name}
              </h3>
              {collection.hasMore && (
                <ChevronRight className="text-white ml-auto" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
