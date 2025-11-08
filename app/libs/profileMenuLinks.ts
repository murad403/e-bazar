import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiWallet } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

type TProfileMenuLinks = {
    path: string;
    route: string;
    icon: any;
}

const profileMenuLinks: TProfileMenuLinks[] = [
    { path: "Account Information", route: "/profile" , icon: IoIosInformationCircleOutline },
    { path: "Order", route: "/profile/order", icon: MdOutlineShoppingBag },
    { path: "My Cart", route: "/profile/card", icon: PiWallet },
    { path: "Settings", route: "/profile/settings", icon: IoSettingsOutline },
]
export default profileMenuLinks;