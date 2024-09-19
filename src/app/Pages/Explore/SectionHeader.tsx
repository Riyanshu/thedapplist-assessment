import { useTypedDispatch, useTypedSelector } from "@/app/hooks/useStore";
import { selectCategories, selectChain, updateCategories, updateChain } from "@/app/store/features/slice";
import { useMemo } from "react";

const SectionHeader = () => {
    const categories = useTypedSelector(selectCategories);
    const chain = useTypedSelector(selectChain);
    const dispatch = useTypedDispatch();
    
    const isFiltered = useMemo(() => {
        if (categories.length || chain) return true;
        return false;
    }, [categories, chain])

    const handleClick = () => {
        dispatch(updateChain(null));
        dispatch(updateCategories([]));
    }

    return (
        <div className='contributor-profile-section bg-gradient-to-t from-white to-gray-50'>
            <div className="container">
                <header className="flex flex-col py-8">
                    <div className="flex gap-2">
                        <h1 className="h3 font-extrabold text-4xl">Explore projects</h1>
                        {isFiltered && (
                            <button onClick={handleClick} className="pl-2">
                                <span className="badge !border-[#FDD00D] bg-[#FFF7D7] text-[#796301] rounded-full">Clear filters</span>
                            </button>
                        )}
                    </div>
                </header>
            </div>
        </div>
    );
}

export default SectionHeader;