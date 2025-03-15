import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='flex flex-col mt-5 border-t border-gray-200'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <h1>Logo</h1>
          <p>
            E-Commerce 2025
            <br />
            All rights reserved
          </p>
        </div>
        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className='flex flex-col gap-6 text-base min-w-[170px]'
            >
              <h3 className='font-semibold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'
                >
                  <p className='text-gray-700'>{item.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-5 gap-x-5'>
        <p>&copy; 2025 E-Commerce | All Rights Reserved</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
