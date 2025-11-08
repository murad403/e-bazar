import React from 'react';
import ProductCard from '../components/ui/ProductCard';

const TopRated = () => {
    return (
        <div>
            <h2 className='text-gray-800 font-semibold text-2xl'>Top Selling</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center'>
                {
                    [1, 2, 3, 4, 5].map((product, index) => (
                        <ProductCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopRated;