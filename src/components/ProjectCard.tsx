import ShareIcon from "@/app/icons/ShareIcon";
import UpvoteIcon from "@/app/icons/UpvoteIcon";
import Image from 'next/image';

const ProjectCard = () => {
    return (
        <div className="card-container group rounded-lg border border-coolGray-300 bg-white p-4  cursor-pointer w-full">
            <div className="border-b border-coolGray-300 pb-4">
                <div className="mb-3 flex justify-between">
                    <div className="flex space-x-3">
                        <div className="group-hover flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-coolGray-300">
                            <div className="h-11 w-11 flex-none">
                                <Image alt='Icon' width={44} height={44} src="/images/image.png" className='h-full w-full rounded-full object-cover' style={{ color: 'transparent' }} />
                            </div>
                        </div>
                        <div>
                            <div className="mb-0.5">
                                <h4 className="max-w-[160px] sm:max-w-[188px] md:max-w-[200px] lg:max-w-[158px] whitespace-nowrap truncate text-lg font-bold text-black">
                                    Mint
                                </h4>
                            </div>
                            <div className="max-w-[164px] truncate whitespace-nowrap text-sm font-semibold text-coolGray-500 lg:max-w-[158px]">
                                NFTs
                            </div>
                        </div>
                    </div>
                    <button className="h-6 w-6 flex justify-center items-center rounded-full text-coolGray-400 transition-all ease-linear opacity-20 hover:opacity-100 hover:bg-gray-50 hover:text-black">
                        <ShareIcon />
                    </button>
                </div>
                <div className="line-clamp-2 h-10 text-sm font-normal text-coolGray-600">
                    Mint is a Layer 2 blockchain focused on NFT innovation, decentralized storage, and expanding NFT application scenarios.
                </div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-1.5">

                </div>
                <button className="text-gray-600 hover:border-black hover:text-black btn btn-sm btn-default !flex items-center space-x-2 border px-3 opacity-100">
                    <span className="upvote-btn-icon transition-all ease-linear">
                        <UpvoteIcon />
                    </span>
                    <span>102</span>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;