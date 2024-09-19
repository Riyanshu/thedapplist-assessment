"use server"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/app/icons/SearchIcon';
import Dropdown from './Dropdown';
import MenuIcon from '../icons/MenuIcon';

const menuOptions = [
  {
    name: 'Explore',
    label: 'Explore'
  },
  {
    name: 'Leaderboard',
    label: 'Leaderboard'
  },
  {
    name: 'Synergy',
    label: 'Synergy'
  },
  {
    name: 'API',
    label: 'API'
  }
]

const Header = () => {
  const src = 'https://thedapplist.com/_next/static/media/buttonPattern.ec93ee11.png';

  return (
    <header className='sticky top-0 header z-50 bg-white sm:py-3 py-3 lg:py-4'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex items-center mr-6 relative'>
            <Image alt='Page Icon' width={100} height={50} src="/images/image.png" />
          </div>
          <div>
            <nav className='hidden items-center h-20 m-auto xl:flex'>
              <ul className='flex items-center gap-4'>
                {menuOptions.map((item) => (
                  <li key={item.name} className='relative mx-2 transition-all lg:mx-1'>
                    <Link href="" className="flex items-center justify-center text-lg font-semibold text-coolGray-700">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex items-center justify-end flex-1 gap-3 sm:gap-2'>
          <div className='input-group w-[312px] bg-coolGray-100 border rounded-lg'>
            <SearchIcon />
            <input placeholder='Search here' className='form-input h-11 w-full bg-coolGray-100 transition-colors' />
          </div>
          <button className='!hidden lg:!inline-block btn-default px-5 py-3 whitespace-nowrap rounded-lg !bg-[#0D5165] btn btn-md  !text-[#FBFE6E] font-semibold text-base hover:!bg-[#18637a] hover:!text-[#f4f427]'>
            Claim Points
            <Image className='absolute bottom-0 left-0 z-50' width={246} height={88} alt='claim' src={src} />
          </button>
          <button className='!hidden btn btn-black lg:!inline-block rounded-lg whitespace-nowrap h-full px-5 py-3'>
            Connect Wallet
          </button>
          <div className='flex xl:hidden'>
            <Dropdown icon={<MenuIcon />} title='Menu' options={menuOptions} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
