import Swal from "sweetalert2";

const SecondaryButton = ({ title, item, type }) => {
  const handleAddToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const isItemInCart = existingCartItems.some(
      (cartItem) => cartItem?.id === item?.id
    );

    if (isItemInCart) {
      Swal.fire({
        icon: "warning",
        title: "Item is already in the cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const newItem = { ...item };
      existingCartItems.push(newItem);
      localStorage.setItem("cart", JSON.stringify(existingCartItems));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Item added to the cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
