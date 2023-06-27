import Link from 'next/link';

import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

export function Header() {
    return (
        <header className="flex items-center justify-between h-16 px-40 max-w-full bg-[#8B5A2B] text-white">
            <div className="flex gap-4">
                <Link href="https://www.facebook.com" target='_blank'><FacebookIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>
                <Link href="https://www.instagram.com" target='_blank'><InstagramIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>
                <Link href="https://www.twitter.com" target='_blank'><TwitterIcon className='opacity-80 hover:opacity-100 transition-colors' /></Link>

            </div>

            <div>
                <h1 className="text-2xl">Cafeteria</h1>
            </div>

            <div></div>
        </header>
    )
}