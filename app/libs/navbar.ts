type TNavbar = {
    path: string;
    route: string;
}

const navbarLinks: TNavbar[] = [
    { path: '/', route: 'Home' },
    { path: '/shop', route: 'Shop' },
    { path: '/contact', route: 'Contact' },
    { path: '/about', route: 'About' },
    { path: '/dashboard', route: 'Dashboard' },
]

export default navbarLinks;