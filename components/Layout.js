import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  const [drop, setDrop] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar
        drop={drop}
        setDrop={setDrop}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}
