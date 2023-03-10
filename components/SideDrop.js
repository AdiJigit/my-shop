import Link from "next/link";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

export default function SideDrop({ setDrop }) {
  return (
    <div className="w-full h-full bg-black/20 fixed top-0 left-0 right-0 bottom-0 z-[999]">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="fixed left-0 w-[300px] h-full bg-white "
      >
        <TfiClose
          onClick={() => setDrop(false)}
          size={25}
          className="mt-5 ml-5 cursor-pointer"
        />
        <div className="mt-10 flex h-full flex-col">
          <Link
            href="/"
            className="flex-1 flex justify-center items-center bg-black text-white hover:scale-[1.01] cursor-pointer"
          >
            <p>ГЛАВНАЯ</p>
          </Link>
          <Link
            href="/products"
            className="flex-1 flex justify-center items-center bg-gray-100 hover:scale-[1.01] cursor-pointer"
          >
            <p>ПРОДУКТЫ</p>
          </Link>
          <div className="flex-1 flex justify-center items-center bg-black hover:scale-[1.01]">
            <input
              type="text"
              name="search"
              placeholder="Поиск"
              className="p-3 mb-20"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
