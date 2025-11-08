"use client"
import React, { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import NavigateButton from '../components/ui/NavigateButton';
import productImage from "../../public/products/product.jpg";
import Image from 'next/image';
import { MdOutlineDelete } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { removeCart } from '../redux/features/cart/cartSlice';
import Link from 'next/link';

const page = () => {
    const { cart } = useAppSelector(state => state.cart);
    const [quantities, setQuantities] = useState<number[]>(cart?.map(() => 1) || []);
    const dispatch = useAppDispatch();

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const cost = 10;

    const increment = (index: number) => {
        setQuantities(prev => prev.map((q, i) => i === index ? q + 1 : q));
    };
    const decrement = (index: number) => {
        setQuantities(prev => prev.map((q, i) => i === index ? (q > 1 ? q - 1 : 1) : q));
    };
    const handleRemoveCart = (id: string) =>{
        dispatch(removeCart(id));
    }
    return (
        <div className='py-10 px-52'>
            <div className='flex justify-between'>
                <NavigateButton />
                <h2 className='font-semibold text-gray-700 text-2xl'>Cart</h2>
            </div>
            <div className='space-y-3'>
                {
                    cart?.map((product, index) =>
                        <div className='flex items-center gap-10 bg-gray-300 p-3 rounded-lg' key={index}>
                            <Image className='h-24 w-20 rounded-md' src={productImage} alt='product' width={500} height={500}></Image>
                            <div className='w-full'>
                                <h2 className='text xl font-semibold'>{product?.name}</h2>
                                <p className='text-gray-700'>${product?.price}</p>
                                <div className='flex justify-between items-center gap-5 w-full'>
                                    <div className='flex items-center gap-3 mt-2'>
                                        <button
                                            onClick={() => decrement(index)}
                                            className='bg-gray-200 px-2 py-1 rounded hover:bg-gray-300'
                                        >
                                            <IoIosArrowDown />
                                        </button>
                                        <span className='font-semibold'>{quantities[index]}</span>
                                        <button
                                            onClick={() => increment(index)}
                                            className='bg-gray-200 px-2 py-1 rounded hover:bg-gray-300'
                                        >
                                            <IoIosArrowUp />
                                        </button>
                                    </div>
                                    <button onClick={() =>handleRemoveCart(product.id)} className='border border-gray-700 p-1 rounded-full cursor-pointer'><MdOutlineDelete size={20} /></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <h2 className='text-2xl font-semibold my-2'>Order Info</h2>
                <p><span className='font-mediumt text-xl'>Subtotal</span>: ${subtotal}</p>
                <p><span className='font-mediumt text-xl'>Shipping cost</span>: ${cost}</p>
                <p><span className='font-mediumt text-xl'>Total</span>: ${subtotal + cost}</p>
                <div className='mt-7'>
                    <Link href={"/checkout"} className="border border-basic py-2 px-4 bg-basic rounded-lg text-white ">checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default page;