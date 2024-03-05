import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import Swal from "sweetalert2";

export const CartDrawer = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCartItem(parsedCartData);
    }
  }, []);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = [...cartItem];
        updatedCart.splice(index, 1);
        setCartItem(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setState({ ...state, right: false });
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your item is safe :)",
          icon: "error",
        });
      }
    });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="overflow-y-auto"
    >
      <List className="">
        <h1 className="text-2xl font-bold ms-5 mt-2 md:hidden">x</h1>
        <h1 className="text-2xl font-bold text-center mb-5">Your Cart Item</h1>
        {cartItem?.map((item, index) => (
          <ListItem key={index}>
            <div className="flex items-center gap-5 mb-5">
              <div>
                <img
                  className="w-16 h-24 rounded-md"
                  src={item?.image[0]?.mainImage1}
                  alt=""
                />
              </div>
              <h1 className="text-lg font-bold">{item?.title}</h1>
              <div className="gap-2  flex flex-col">
                <Link href={`/productDetails/${item?.id}`}>
                  <button className="text-white bg-black rounded-md px-4 py-2">
                    Details
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-white bg-red-500 rounded-md px-4 py-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  React.useEffect(() => {
    setState({ ...state, right: true });
  }, []);

  return (
    <Drawer
      anchor="right"
      open={state.right}
      onClose={toggleDrawer("right", false)}
    >
      {list("right")}
    </Drawer>
  );
};
