import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";

const NavElements = ["Home", "Product Catalog", "Contact"];
const Navbar = () => {
  return (
    <header className='w-full z-10 mb-10'>
      <nav className='max-w-[1200px] h-auto mt-6 mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          {/* <Image
            src='/logo.png'
            alt='logo'
            width={100}
            height={18}
            className='object-contain'
          /> */}
          <h1>Logo</h1>
        </Link>
        <ul className='sm:flex cursor-pointer list-none items-center gap-x-10'>
          {NavElements.map((item, _id) => (
            <li className='px-4' key={_id}>
              {item}
            </li>
          ))}
        </ul>
        <Button title='Sign in' btnType='button' containerStyles='' />
      </nav>
    </header>
  );
};

export default Navbar;
