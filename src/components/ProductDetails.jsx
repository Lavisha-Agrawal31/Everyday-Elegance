import React, { useState } from 'react'
import { Heart, Minus, Plus, Truck, Eye } from 'lucide-react'

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600'
  ]

  const relatedProducts = [
    {
      name: 'Elegant Evening Gown',
      price: 189,
      originalPrice: 250,
      discount: '-24%',
      rating: 4.8,
      reviews: 120,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Floral Summer Dress',
      price: 79,
      originalPrice: 99,
      discount: '-20%',
      rating: 4.5,
      reviews: 85,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Cocktail Party Dress',
      price: 129,
      originalPrice: 159,
      discount: '-19%',
      rating: 4.7,
      reviews: 95,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Casual Maxi Dress',
      price: 69,
      originalPrice: 89,
      rating: 4.6,
      reviews: 78,
      image: '/placeholder.svg?height=200&width=200'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <span>Home</span>
          <span>/</span>
          <span>Dresses</span>
          <span>/</span>
          <span className="text-gray-900">Elegant Silk Evening Dress</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Dress ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1">
              <img
                src={images[selectedImage]}
                alt="Dress main"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">Elegant Silk Evening Dress</h1>
            
            {/* Ratings */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="text-green-500">In Stock</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold">$199.00</div>

            {/* Description */}
            <p className="text-gray-600">
              Luxurious silk evening dress with a flattering silhouette. Perfect for formal events and special occasions. Features a sweetheart neckline and a flowing skirt.
            </p>

            {/* Colors */}
            <div className="space-y-4">
              <div className="font-semibold">Colors:</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedColor('white')}
                  className={`w-8 h-8 rounded-full bg-white border-2 ${
                    selectedColor === 'white' ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  onClick={() => setSelectedColor('black')}
                  className={`w-8 h-8 rounded-full bg-black border-2 ${
                    selectedColor === 'black' ? 'border-red-500' : 'border-transparent'
                  }`}
                />
                <button
                  onClick={() => setSelectedColor('red')}
                  className={`w-8 h-8 rounded-full bg-red-500 border-2 ${
                    selectedColor === 'red' ? 'border-red-500' : 'border-transparent'
                  }`}
                />
              </div>
            </div>

            {/* Size */}
            <div className="space-y-4">
              <div className="font-semibold">Size:</div>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-red-500 bg-red-50 text-red-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                Add to Cart
              </button>
              <button className="p-3 border rounded-md hover:bg-gray-50">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-4">
                <Truck className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Free Delivery</div>
                  <div className="text-sm text-gray-500">Enter your postal code for Delivery Availability</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="font-semibold">Return Policy</div>
                <div className="text-sm text-gray-500">Free 30 Days Return. Details</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg relative group">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="absolute top-14 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5" />
                </button>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 ${
                          star <= product.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}