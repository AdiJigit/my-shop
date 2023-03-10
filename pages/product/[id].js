import Layout from "@/components/Layout";
import clientPromise from "@/mongo/connectdb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("my-shop");

  const products = await db.collection("products").find({}).toArray();

  return {
    paths: products.map((product) => ({
      params: { id: product._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = await clientPromise;
  const db = client.db("my-shop");
  const id = params.id.toString();
  const o_id = new ObjectId(id);

  const products = await db.collection("products").find({}).toArray();
  const product = await db.collection("products").findOne({ _id: o_id });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default function ProductItem({ product, products }) {
  return (
    <Layout title={`${product.title} - JIGIT+`}>
      <div className="mt-[150px] px-[200px] grid lg:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.image}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[350px]">
          <h1 className="uppercase text-xl font-[500]">{product.title}</h1>
          <p className="mt-5">{product.description}</p>
          <div className="mt-5 w-[300px]">
            <p className="font-[500]">Размер</p>
            <select className="mt-2 w-full bg-gray-100 p-3">
              {product.sizes.map((size, i) => (
                <option key={i}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mt-5 w-[300px]">
            <p className="font-[500]">Цвет</p>
            <select className="mt-2 w-full bg-gray-100 p-3">
              {product.colors.map((color, i) => (
                <option key={i}>{color}</option>
              ))}
            </select>
          </div>
          <div className="mt-5 w-[300px]">
            <button className="p-3 w-full bg-blue-700 border-[2px] border-black font-[500] hover:scale-[1.01]">
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          </div>
          <div className="mt-5 w-[300px]">
            <button className="p-3 w-full bg-violet-700 font-[600] text-white tracking-widest hover:scale-[1.01]">
              КУПИТЬ
            </button>
          </div>
          <Image
            src="/assets/payments.jpg"
            alt=""
            width={500}
            height={500}
            className="mt-10 w-[300px]"
          />
        </div>
      </div>

      <div className="mt-[100px] px-[200px]">
        <h1 className="text-center text-xl font-[500]">
          ЗАКОНЧИ СВОЙ FIT С ЭТИМИ ПРОДУКТАМИ...
        </h1>
        <div className="mt-20 grid lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product._id} className="mt-10 h-[500px] w-[300px]">
              <Link href={`/product/${product._id}`}>
                <Image
                  src={product.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-[400px] w-[300px] object-cover"
                />
              </Link>
              <div className="min-h-[100px] bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-center font-[500]">{product.title}</h1>
                <p className="mt-2 text-center font-[500] tracking-widest">
                  {product.price.toFixed(2)} COM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
