import Link from 'next/link'
import logo from '@/public/images/logo.webp';
import MobileMenu from './mobile-menu'
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img
                src="./images/logo.webp"  // Replace with the actual path to your image
                alt="Cruip Logo"  // Provide a descriptive alt text for accessibility
                className="w-15 h-48"  // Specify the desired width and height
              />
            </Link>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-indigo-900 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white rounded-xl bg-indigo-900 hover:bg-indigo-950 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });

