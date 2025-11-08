import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="bg-gray-300 text-gray-800 py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                    <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>

                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;