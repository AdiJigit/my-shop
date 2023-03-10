import Link from "next/link";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import SideDrop from "./SideDrop";

export default function Navbar({ drop, setDrop, showCart, setShowCart }) {
  return (
    <nav className="h-[10vh] px-[200px] flex justify-between fixed w-full top-0 z-[998]">
      <div
        onClick={() => setDrop(true)}
        className="one flex gap-1 mt-1 cursor-pointer"
      >
        <div className="w-[4px] h-[25px] bg-black mt-[5px]" />
        <div className="w-[4px] h-[25px] bg-black mt-[5px]" />
        <div className="w-[4px] h-[25px] bg-black mt-[5px]" />
      </div>
      <div>
        <Link href='/'>
          <h1 className="text-5xl font-[500]">JIGIT+</h1>
        </Link>
      </div>
      <div className="mt-3 hover:text-blue-500 duration-200 cursor-pointer">
        <FiShoppingBag onClick={() => setShowCart(true)} size={30} />
      </div>
      {drop && <SideDrop setDrop={setDrop} />}
      {showCart && <Cart setShowCart={setShowCart} />}
    </nav>
  );
}
