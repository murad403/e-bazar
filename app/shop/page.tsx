import Search from './Search';
import Filter from './Filter';
import NewArraivalProducts from './NewArraivalProducts';

const page = () => {
    return (
        <div className='space-y-3 py-5'>
            <div>
                <h2 className='text-3xl font-bold'>Hello</h2>
                <p className='text-gray-700'>Welcome to Laza.</p>
            </div>
            <Search></Search>
            <Filter></Filter>
            <NewArraivalProducts></NewArraivalProducts>
        </div>
    );
};

export default page;