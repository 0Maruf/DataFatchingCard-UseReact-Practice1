import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react"; // icon (optional, install via: npm install lucide-react)

const ProductCard = ({ card }) => {
    const [cartItems, setCartItems] = useState([]);

    // যখন parent থেকে card update হবে, cartItems sync করবো
    useEffect(() => {
        setCartItems(card);
    }, [card]);

    // Quantity বাড়ানো
    const increaseQty = (index) => {
        const updated = [...cartItems];
        updated[index].quantity = (updated[index].quantity || 1) + 1;
        setCartItems(updated);
    };

    // Quantity কমানো
    const decreaseQty = (index) => {
        const updated = [...cartItems];
        if ((updated[index].quantity || 1) > 1) {
            updated[index].quantity -= 1;
        }
        setCartItems(updated);
    };

    // পণ্য Remove করা
    const removeItem = (index) => {
        const updated = cartItems.filter((_, i) => i !== index);
        setCartItems(updated);
    };

    // Total price হিসাব
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="my-10 ml-5 bg-white p-5 rounded-lg shadow-lg border ">
            <h1 className="text-xl font-semibold mb-4 border-b pb-2">
                🛒 Your Cart ({cartItems.length})
            </h1>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {cartItems.length === 0 && (
                    <p className="text-gray-500 text-sm text-center">
                        No items added yet.
                    </p>
                )}

                {cartItems.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow-md transition-all duration-300 group relative"
                    >

                        {/* Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-md border"
                        />

                        {/* Info */}
                        <div className="flex-1 px-3">
                            <h2 className="text-md font-medium text-gray-800 truncate">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                ${product.price}
                            </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => decreaseQty(index)}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                −
                            </button>
                            <span className="px-2">
                                {product.quantity || 1}
                            </span>
                            <button
                                onClick={() => increaseQty(index)}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>

                        {/* Delete icon */}
                        <button
                            onClick={() => removeItem(index)}
                            className="absolute top-2 right-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                            title="Remove item"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Total & Checkout */}
            {cartItems.length > 0 && (
                <div className="mt-5 border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all">
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
