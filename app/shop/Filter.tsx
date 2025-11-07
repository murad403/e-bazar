"use client";
import Image from "next/image";
import categoryImage from "../../public/products/category.png";

const Filter = () => {
    const handleCategory = (categoryName: string) => {
        console.log("Selected category:", categoryName);
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-2'>Choose Brand</h2>
            <div className='flex items-center gap-5 overflow-x-auto'>
                {
                    categories.map((category) => (
                        <button onClick={() => handleCategory(category.name)} className="flex items-center gap-3 justify-center bg-gray-300 py-2 px-2 rounded-lg cursor-pointer" key={category.id}>
                            <Image src={category.image} alt={category.name} width={100} height={100} className="size-12 rounded-lg"/>
                            <h3 className='text-gray-800'>{category.name}</h3>
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

type TCategories = {
    id: number;
    name: string;
    image: any;
}
const categories: TCategories[] = [
    { id: 1, name: "Nike", image: categoryImage },
    { id: 2, name: "Adidas", image: categoryImage },
    { id: 3, name: "Puma", image: categoryImage },
    { id: 4, name: "Reebok", image: categoryImage },
];

export default Filter;