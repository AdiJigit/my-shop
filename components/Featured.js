import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className='mt-32 min-h-[80vh] px-[250px] grid lg:grid-cols-2 gap-10'>
      <div>
        <Image
          src='/assets/jigit-tshirts.png'
          alt=''
          width={1000}
          height={1000}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-[350px]'>
        <h1 className='uppercase text-xl font-[500]'>В работай тишине Футболка.</h1>
        <p className='mt-5'>ПРОДУМАННЫЙ ДИЗАЙН - Умный плоский воротник разработан так, чтобы сохранять свою форму, поэтому вам не нужно бросать его в сушилку в течение дня.</p>
        <div className='mt-5 w-[300px]'>
          <p className='font-[500]'>Размер</p>
          <select className='mt-2 w-full bg-gray-100 p-3'>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className='mt-5 w-[300px]'>
          <p className='font-[500]'>Цвет</p>
          <select className='mt-2 w-full bg-gray-100 p-3'>
            <option>Белый</option>
            <option>Чёрный</option>
          </select>
        </div>
        <div className='mt-5 w-[300px]'>
          <button className='p-3 w-full bg-blue-700 border-[2px] border-black font-[500] hover:scale-[1.01]'>ДОБАВИТЬ В КОРЗИНУ</button>
        </div>
        <div className='mt-5 w-[300px]'>
          <button className='p-3 w-full bg-violet-700 font-[600] text-white tracking-widest hover:scale-[1.01]'>КУПИТЬ</button>
        </div>
      </div>
    </div>
  )
}
