"use client";
import { exploreCategory, filterOptions, sortOptions } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import SwiperButtonPrev from '@/components/Swiper/SwiperButtonPrev';
import SwiperButtonNext from '@/components/Swiper/SwiperButtonNext';
import { useState } from 'react';
import Dropdown from '@/components/Dropdown';

const Filter = () => {
    const [currIndex, setCurrIndex] = useState(0);
    
    return (
        <div className='flex items-center justify-between pt-6 space-x-5'>
            <div className='block min-w-0'>
                <Swiper
                    onSlideChange={(swiper) => {
                        setCurrIndex(swiper.activeIndex);
                    }}
                    modules={[Pagination, Navigation, A11y]}
                    slidesPerView={10}
                    className='!py-[6px]'
                    wrapperClass='swiper-wrapper'
                >
                    <div>
                        {exploreCategory.map((item) => (
                            <SwiperSlide className='!w-fit mr-2' key={item}>
                                <button className='btn btn-sm whitespace-nowrap rounded-full btn-default'>{item}</button>
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className='absolute inset-y-0 w-full'>
                        <SwiperButtonPrev hide={currIndex === 0} />
                        <SwiperButtonNext />
                    </div>
                </Swiper>
            </div>
            <div className='flex items-center space-x-3'>
                <Dropdown title='Filter by' options={filterOptions} />
                <Dropdown title='Sort by' options={sortOptions} />
            </div>
        </div>
    );
}

export default Filter;