const SecondaryButton = ({ title, item, type }) => {
  const handleAddToCart = () => {
    // Retrieve existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the array
    const newItem = { ...item }; // Assuming `item` is an object, spread its properties
    existingCartItems.push(newItem);

    // Save the updated cart items back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  return (
    <div>
      <button
        type={type}
        onClick={handleAddToCart}
        className="btn bg-white text-black border border-white hover:border-none transition-all transform hover:-translate-y-1 hover:bg-gray-100"
      >
        {title}
      </button>
    </div>
  );
};

export default SecondaryButton;
