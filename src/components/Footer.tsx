import Link from 'next/link';

import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

export function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:justify-between py-10 px-6 lg:px-48 max-w-full bg-[#F4A460]">
            <div>
                <h2 className="text-3xl">Cafeteria</h2>
            </div>

            <div className="flex gap-4">
                <Link href="https://www.facebook.com" target='_blank'><FacebookIcon className='hover:opacity-50 transition-all' /></Link>
                <Link href="https://www.instagram.com" target='_blank'><InstagramIcon className='hover:opacity-50 transition-all' /></Link>
                <Link href="https://www.twitter.com" target='_blank'><TwitterIcon className='hover:opacity-50 transition-all' /></Link>
            </div>
        </footer>
    )
}