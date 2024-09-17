"use server"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/app/icons/SearchIcon';

const Header = () => {
  const src = 'https://thedapplist.com/_next/static/media/buttonPattern.ec93ee11.png';

  return (
    <div className="bg-white flex flex-col lg:flex-row lg:justify-between text-base items-center lg:px-24 py-4">
      <div className="flex flex-col lg:flex-row lg:items-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
        <div className="flex justify-between sm:items-center items-start w-full lg:w-auto">
          <Image alt='Page Icon' width={100} height={50} src="/images/image.png" className='' />
          <div className="flex space-x-4 lg:hidden gap-4 sm:gap-0 sm:items-center flex-col-reverse items-end sm:flex-row">
            <div className="text-text2 text-nowrap h-fit text-sm px-4 py-2 rounded-2xl border-2 cursor-pointer border-hover bg-elevation2 hover:text-hover">
              How It Works
            </div>
            <button className="flex items-center h-12 bg-elevation3 space-x-2 px-4 py-2 rounded-2xl text-text1">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full h-8 w-8"
              />
              <span>riyanshu.eth</span>
            </button>
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 lg:gap-8 w-auto">
          <Link href="" className="text-grey text-lg hover:text-hover">
            Explore
          </Link>
          <Link href="" className="text-grey text-lg hover:text-hover">
            Leaderboard
          </Link>
          <Link href="" className="text-grey text-lg hover:text-hover">
            Synergy
          </Link>
          <Link href="" className="text-grey text-lg hover:text-hover">
            API
          </Link>
        </nav>
      </div>

      <div className="hidden lg:flex items-center space-x-4 w-fit">
        <div className='input-group w-[312px] bg-coolGray-100 border rounded-lg'>
          <SearchIcon />
          <input placeholder='Search here' className='form-input h-11 w-full bg-coolGray-100 transition-colors' />
        </div>
        <button className='relative btn-default px-5 py-3 whitespace-nowrap rounded-lg bg-[#0D5165] btn btn-md  text-[#FBFE6E] font-semibold text-base hover:bg-[#18637a] hover:text-[#f4f427]'>
          Claim Points
          <Image className='absolute bottom-0 left-0 z-50' width={246} height={88} alt='claim' src={src} />
        </button>
        <button className='btn block text-white rounded-lg whitespace-nowrap h-full bg-black px-5 py-3 hover:bg-[#424242]'>
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Header;
