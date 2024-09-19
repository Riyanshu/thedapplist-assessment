import LeftIcon from "@/app/icons/LeftIcon";
import { useSwiper } from "swiper/react";

interface ISwiperButtonPrev {
    hide: boolean;
}

const SwiperButtonPrev = (props: ISwiperButtonPrev) => {
    const swiper = useSwiper();

    if (props.hide) {
        return;
    }

    return (
        <>
            <div className='absolute left-0 z-[9] flex h-14 w-14 bg-gradient-to-r from-white to-white/5'></div>
            <button onClick={() => swiper.slidePrev()} className='btn btn-default absolute left-0 z-10 !flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 p-0'>
                <LeftIcon />
            </button>
        </>
    );
};

export default SwiperButtonPrev;