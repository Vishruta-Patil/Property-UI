import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold">Minimum Living Cost</a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" legacyBehavior><a>Home</a></Link>
          <Link href="/about" legacyBehavior><a>About</a></Link>
          <Link href="/contact" legacyBehavior><a>Contact</a></Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <Link href="/" legacyBehavior><a className="block px-4 py-2">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="block px-4 py-2">About</a></Link>
          <Link href="/contact" legacyBehavior><a className="block px-4 py-2">Contact</a></Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
