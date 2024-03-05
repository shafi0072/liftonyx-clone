

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import Swal from "sweetalert2";
import { RiShoppingCartLine } from "react-icons/ri";

export const CartDrawer = () => {
  const [cartItem, setCartItem] = useState([]);

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

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
          text: "Your item is safe 🙂",
          icon: "error",
        });
      }
    });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="overflow-y-auto"
    >
      <List>
        <div className="flex max-w-4xl justify-between p-5">
          <div className="flex gap-3 text-2xl">
            <RiShoppingCartLine />
            <h1 className="text-xl font-semibold  text-center mb-5"> Cart</h1>
          </div>
          <h1 className="text-2xl  ms-5 mt-2">x</h1>
         
        </div>
        <hr />
       
       <div className="w-[80%] mx-auto"> 
       <p className="text-center">ghj</p>
       <progress className="progress  " value="100" max="100"></progress></div>
        {cartItem.length === 0 ? (
          <ListItem>
            <div className="my-40 text-center items-center justify-center mx-auto">
              <p className="flex text-center items-center mx-32 ">Your cart is empty.</p>
              <button className="btn btn-wide text-white bg-black mx-20 my-4">START SHOPPING</button>
            </div>
          </ListItem>
        ) : (
          cartItem.map((item, index) => (
          <div>
              <ListItem key={index}>
              <div className="flex items-center gap-5 mb-5">
                <div>
                  <img
                    className="w-36 h-40 rounded-md"
                    src={item?.image[0]?.mainImage2}
                    alt=""
                  />
                </div>
                <div className="flex gap-8">
                  <div>
                    <h1 className="text-sm text-black">{item?.title}</h1>
                    <h4 className="text-gray-500 text-sm">ONYX Black</h4>
                        {/* count  */}

          
       <div className=" flex items-center justify-center gap-5">
       <div className="max-w-sm mx-auto mt-5">
      
      <div className="flex justify-center px-3 rounded-lg  items-center space-x-5 border border-black  ">
        <button type="button" onClick={decrement} className="w-2   text-gray-800 font-bold  rounded">
          -
        </button>
        <span className=" font-semibold">{count}</span>
        <button type="button" onClick={increment} className="w-2   text-gray-800 font-bold  rounded">
          +
        </button>
      </div>
    </div> 
    <div className="btn-ghost underline mt-3 ">Remove</div>
       </div>
                  </div>
                  <div>
                    <h4 className="text-sm">Tk 3,810.47</h4>
                    <h4 className="line-through text-black ">
                      Tk 4,157.30
                    </h4>
                  </div>
                </div>
              
               
                {/* <div className="gap-2  flex flex-col">
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
                </div> */}
              </div>
             
              
            </ListItem>
            <div className="my-20">
                  <hr />
                  <div className=" flex justify-between p-5 gap-3">
                    <p className="underline text-sm">Add order note</p>
                    <p className="text-sm">Shipping & taxes calculated at checkout</p>
                  </div>
                 <div className="justify-center items-center mx-auto p-3">
                 <button className="btn btn-block bg-black text-white">CheckOut</button>
                 </div>
                </div>

          </div>
            
          ))
        )}
      </List>
      {/* <Divider /> */}
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





