import React from 'react';
import productImage from "../../../public/products/product.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { TOrder } from '@/app/profile/order/page';

const OrderCard = ({order}: {order: TOrder}) => {
    return (
        <div className='flex items-center justify-center gap-12 bg-gray-300 rounded-lg p-3'>
            <Image src={productImage} alt="Product" className='w-20 h-full rounded-lg'/>
            <div className='flex flex-col justify-between gap-1'>
                <h3 className='font-semibold text-lg'>{order.name}</h3>
                <div className='flex justify-between items-center *:text-gray-600'>
                    <p>${order.price}</p>
                    <p>Qtu: {order.quantity}</p>
                </div>
                {
                    order.status === "completed" ? <Link href={"/shop"} className='bg-basic py-2 px-3 rounded-lg text-white cursor-pointer text-center'>
                    Buy Again
                </Link>: 

                <button className='text-basic border border-basic rounded-lg py-2 px-3 text-center cursor-pointer'>Cancel</button>
                }
            </div>
        </div>
    );
};

export default OrderCard;