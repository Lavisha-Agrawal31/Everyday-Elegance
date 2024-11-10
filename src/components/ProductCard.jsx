export default function ProductCard({ name, price, image }) {
  return (
    <div className="flex-none w-64">
      <img 
        src={image} 
        alt={name}
        className="w-full h-80 object-cover mb-2 rounded-sm"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}