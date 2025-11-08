"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDoubleArrow } from "react-icons/md";
import profileMenuLinks from '../libs/profileMenuLinks';
import LogoutModal from '../components/ui/LogoutModal';
import profileImage from "../../public/products/product.jpg";
import Image from 'next/image';



const ProfileMenu = () => {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <div className='text-title md:sticky top-0 text-gray-700'>
            <ul className='bg-linear-to-b from-purple-200 to-blue-500 hidden md:flex flex-col items-center py-10 gap-4 rounded-xl text-xl sticky'>
                <li className='flex flex-col items-center'>
                    <Image src={profileImage} alt="Profile" className='w-16 h-16 rounded-full' />
                    <span className='font-semibold'>John snow</span>
                </li>
                {
                    profileMenuLinks.map((link, index) =>
                        <li key={index}>
                            <Link className={`${link?.route === pathName ? "text-hard font-semibold" : "font-thin"} flex items-center gap-1`} href={link?.route}>{link?.icon && <link.icon/>} {link?.path}</Link>
                        </li>
                    )
                }
                <li>
                    <LogoutModal></LogoutModal>
                </li>
            </ul>

            <div className='drawer md:hidden'>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer" className='inline-block bg-normal p-2 rounded-ful'>
                        <MdDoubleArrow className='text-gray-700' size={25}/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-linear-to-b from-purple-200 to-blue-500 text-lg min-h-full w-[60%] space-y-4 p-4">
                        {
                            profileMenuLinks.map((link, index) =>
                                <li key={index}>
                                    <Link className={`${link?.route === pathName ? "text-hard font-semibold" : "font-thin"} flex items-center gap-1 whitespace-nowrap`} href={link?.route}>{link?.icon && <link.icon/>}{link?.path}</Link>
                                </li>
                            )
                        }
                        <li>
                            <LogoutModal></LogoutModal>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;