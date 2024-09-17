import RightIcon from "@/app/icons/RightIcon";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className='absolute right-0 z-[9] flex h-14 w-14 bg-gradient-to-r from-white/5 to-white'></div>
            <button onClick={() => swiper.slideNext()} className='btn btn-default absolute right-0 z-10 !flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 p-0'>
                <RightIcon />
            </button>
        </>
    );
};

export default SwiperButtonNext;