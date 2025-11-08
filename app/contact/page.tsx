import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const page = () => {
    return (
        <div className='space-y-10'>
            <ContactBanner></ContactBanner>
            <ContactForm></ContactForm>
        </div>
    );
};

export default page;