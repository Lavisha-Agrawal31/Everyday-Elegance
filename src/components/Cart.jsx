import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronUp, Trash2 } from "lucide-react"

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Italy Pizza",
      description: "Extra cheese and toping",
      price: 681,
      quantity: 1,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 2,
      name: "Combo Plate",
      description: "Extra cheese and toping",
      price: 681,
      quantity: 1,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 3,
      name: "Spanish Rice",
      description: "Extra garlic",
      price: 681,
      quantity: 1,
      image: "https://via.placeholder.com/80"
    }
  ])

  const updateQuantity = (id, increment) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 4
  const total = subtotal + shipping

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center gap-2">
        <ArrowLeft className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Shopping Continue</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Shopping cart</h2>
          <p className="mb-4 text-gray-600">You have {cartItems.length} item in your cart</p>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.id, true)}
                      className="rounded p-1 hover:bg-gray-100"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <span className="text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, false)}
                      className="rounded p-1 hover:bg-gray-100"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="w-20 text-right">
                    <div className="font-semibold">${item.price}</div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="rounded p-2 text-gray-600 hover:bg-gray-100"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-black p-6 text-white">
          <h2 className="mb-4 text-xl font-semibold">Shipping Address</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2 placeholder-indigo-200"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Street Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter your street address"
                className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2 placeholder-indigo-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2 placeholder-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <select
                  id="state"
                  className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2"
                >
                  <option value="">Select state</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                  <option value="tx">Texas</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zip" className="block text-sm font-medium">
                  ZIP Code
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="ZIP Code"
                  className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2 placeholder-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium">
                  Country
                </label>
                <select
                  id="country"
                  className="mt-1 w-full rounded-md border-gray-300 bg-indigo-500 bg-opacity-50 p-2"
                >
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="mx">Mexico</option>
                </select>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total (Tax incl.)</span>
                <span>${total}</span>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-white p-2 text-indigo-600 hover:bg-indigo-100">
              <span className="mr-2">${total}</span>
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;