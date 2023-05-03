import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101] ">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={""}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          // onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}

      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src={
                "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?cs=srgb&dl=pexels-william-choquette-2641886.jpg&fm=jpg"
              }
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />
            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Chicken</p>
              <p className="text-sm block text-gray-300 font-semibold">$2.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
