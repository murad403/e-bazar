import React from 'react';

const profileHeader = ({title, description}: {title: string, description: string}) => {
    return (
        <div className='bg-linear-to-l to-purple-300 from-purple-500 rounded-lg rounded-tl-4xl px-6 py-3 to-hard from-normal flex items-center md:gap-10 gap-6 mb-3'>
            <div className='text-white'>
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{title}</h2>
                <p className='lg:text-[16px] text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default profileHeader;