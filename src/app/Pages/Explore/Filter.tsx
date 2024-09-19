"use client";
import { exploreCategory, filterOptions, sortOptions } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import SwiperButtonPrev from '@/app/components/Swiper/SwiperButtonPrev';
import SwiperButtonNext from '@/app/components/Swiper/SwiperButtonNext';
import { useEffect, useMemo, useState } from 'react';
import Dropdown from '@/app/components/Dropdown';
import { useTypedDispatch, useTypedSelector } from '@/app/hooks/useStore';
import { selectCategories, selectChain, updateCategories, updateChain } from '@/app/store/features/slice';
import { useGetCategoriesQuery, useGetChainsQuery } from '@/app/store/services';
import { Category, Chain } from '@/app/store/model';
import MultiSelect from '@/app/components/Dropdown/MultiSelect';

const Filter = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const [categories, setCategories] = useState<Category[]>([]);
    const [chains, setChains] = useState<Chain[]>([]);

    const selectedCategories = useTypedSelector(selectCategories);
    const selectedChain = useTypedSelector(selectChain);
    const dispatch = useTypedDispatch();

    const { data: CategoryData } = useGetCategoriesQuery();
    const { data: ChainsData } = useGetChainsQuery();

    const handleCategoryClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            dispatch(updateCategories(selectedCategories.filter(item => item !== category)))
        } else {
            dispatch(updateCategories([...selectedCategories, category]))
        }
    }

    const handleChainClick = (chain: string) => {
        dispatch(updateChain(chain));
    }

    const selectedChainDetails = useMemo(() => {
        if (selectedChain) {
            const chainDetails = chains.find(chain => chain.name === selectedChain);
            if (chainDetails) {
                return {
                    name: chainDetails.name,
                    label: chainDetails.label
                }
            } else return null;
        } else return null;
    }, [selectedChain, chains])

    useEffect(() => {
        if (CategoryData?.data) {
            setCategories(CategoryData.data);
        }
    }, [CategoryData])

    useEffect(() => {
        if (ChainsData?.data) {
            setChains(ChainsData.data);
        }
    }, [ChainsData])
    
    return (
        <div className='flex items-center justify-between pt-6 gap-6'>
            <div className='min-w-0 hidden lg:block'>
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
                        {categories.map((category) => (
                            <SwiperSlide className='!w-fit mr-2' key={category.id}>
                                <button
                                    className={`btn btn-sm whitespace-nowrap rounded-full ${selectedCategories.includes(category.name) ? 'btn-black' : 'btn-default'}`}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                        {category.label}
                                </button>
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className='absolute inset-y-0 w-full'>
                        <SwiperButtonPrev hide={currIndex === 0} />
                        <SwiperButtonNext />
                    </div>
                </Swiper>
            </div>
            <div className='flex items-center space-x-3 w-full lg:w-fit'>
                <MultiSelect className='block lg:hidden w-1/2' title='Categories' options={categories} selected={selectedCategories} onClick={handleCategoryClick} />
                <Dropdown className='w-1/2 lg:w-fit' title='Filter by' selected={selectedChainDetails} options={chains} onClick={handleChainClick} />
                <Dropdown className='hidden lg:block' title='Sort by' options={sortOptions} />
            </div>
        </div>
    );
}

export default Filter;