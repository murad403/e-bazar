"use client";
import OrderCard from '@/app/components/ui/OrderCard';
import ProfileHeader from '@/app/components/ui/ProfileHeader';
import orderTabs from '@/app/libs/orderTabs';
import { useState } from 'react';

export type TOrder = {
    id: number;
    status: string;
    name: string;
    price: number;
    quantity: number;
}

const page = () => {
    const [isActiveTab, setIsActiveTab] = useState<string>("completed");
    const orders: TOrder[] = [
        {id: 1, status: "completed", name: "Men's Tie-Dye T-Shirt", price: 25.99, quantity: 1},
        {id: 2, status: "completed", name: "Men's Tie-Dye T-Shirt", price: 25.99, quantity: 1},
        {id: 3, status: "completed", name: "Men's Tie-Dye T-Shirt", price: 25.99, quantity: 1},
        {id: 4, status: "received", name: "Men's Tie-Dye T-Shirt", price: 25.99, quantity: 1},
        {id: 5, status: "received", name: "Men's Tie-Dye T-Shirt", price: 25.99, quantity: 1},
    ]
    return (
        <div>
            <ProfileHeader title='Order History' description='View your past orders below'></ProfileHeader>
            <div className='space-x-5'>
                {
                    orderTabs.map((tab, index: number) => (
                        <button onClick={() => setIsActiveTab(tab.name)} key={index} className={`py-2 px-4  ${isActiveTab === tab.name ? 'border-b border-basic text-basic' : ' text-gray-700'} capitalize cursor-pointer`}>
                            {tab.label}
                        </button>
                    ))
                }
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {orders.filter(order => order.status === isActiveTab).map(order => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};


export default page;