import Link from 'next/link';
import React from 'react';
import { RxSketchLogo } from 'react-icons/rx';

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href={'/'} className="">
            <div className="bg-[#3a0ca3] text-[#ffffff] p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="p-2 border-b-[1px] border-gray-200 w-full"></span>
          <Link href={'/'} className="">
            <div className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#ffffff] p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
