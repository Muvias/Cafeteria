import Link from 'next/link';

import { FacebookIcon, InstagramIcon, TwitterIcon, Menu } from 'lucide-react';

export function Header() {
    return (
        <header className="flex items-center h-16 px-4 sm:px-40 max-w-full bg-[#8B5A2B] text-white">
            <div className="sm:flex sm:visible gap-4 flex-1 hidden invisible">
                <Link href="https://www.facebook.com" target='_blank'><FacebookIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>
                <Link href="https://www.instagram.com" target='_blank'><InstagramIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>
                <Link href="https://www.twitter.com" target='_blank'><TwitterIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>

            </div>

            <div className='sm:flex-1 ml-auto'>
                <h1 className="text-2xl">Cafeteria</h1>
            </div>

            <div className='sm:hidden sm:invisible ml-auto cursor-pointer'>
                <Menu />
            </div>
        </header>
    )
}