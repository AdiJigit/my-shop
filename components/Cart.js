import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Cart({ setShowCart }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/20">
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 right-0 w-[350px] h-full bg-white"
      >
        <div className="mt-5 px-5 flex justify-between">
          <p className="font-[500]">КОРЗИНА</p>
          <AiOutlineCloseSquare
            onClick={() => setShowCart(false)}
            size={30}
            className="text-gray-500 cursor-pointer hover:scale-[1.01] hover:text-black"
          />
        </div>
        <div className="mt-10 h-[15vh] flex justify-center items-center bg-blue-800">
          <p className="text-sm text-white font-[500]">ДВИГАЙСЯ В ТИШИНЕ.</p>
        </div>
      </motion.div>
    </div>
  );
}
