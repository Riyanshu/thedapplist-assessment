import ShareIcon from "@/app/icons/ShareIcon";
import UpvoteIcon from "@/app/icons/UpvoteIcon";
import Image from 'next/image';
import { Chain, Project } from "../store/model";

interface IProjectCard {
    project: Project;
}

const ChainList = (chains: Chain[]) => {
    const displayChains = chains.slice(0, 2);
    const remainingCount = chains.length - displayChains.length;

    return (
        <div className="flex items-center gap-1.5">
            {!!chains.length && 
                displayChains.map((chain) => (
                    <Image key={chain.id} alt='chain' width={20} height={20} src={chain.imageIcon} className="rounded-full"  />
                ))
            }
            {remainingCount > 0 && (
                <span className="text-xs font-semibold text-gray-600">+{remainingCount} more</span>
            )}
        </div>
    )
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
    const {project} = props;

    return (
        <div onClick={() => project.permalink && window.open(`https://thedapplist.com/project/${project.permalink}`, '_blank')} className="card-container group rounded-lg border border-coolGray-300 bg-white p-4  cursor-pointer w-full">
            <div className="border-b border-coolGray-300 pb-4">
                <div className="mb-3 flex justify-between">
                    <div className="flex space-x-3">
                        <div className="group-hover flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-coolGray-300">
                            <div className="h-11 w-11 flex-none">
                                <Image alt='Icon' width={44} height={44} src={project.avatar} className='h-full w-full rounded-full object-cover' style={{ color: 'transparent' }} />
                            </div>
                        </div>
                        <div>
                            <div className="mb-0.5">
                                <h4 className="max-w-[160px] sm:max-w-[188px] md:max-w-[200px] lg:max-w-[158px] whitespace-nowrap truncate text-lg font-bold text-black">
                                    {project.name}
                                </h4>
                            </div>
                            <div className="max-w-[164px] truncate whitespace-nowrap text-sm font-semibold text-coolGray-500 lg:max-w-[158px]">
                                {project.categories[0].label}
                            </div>
                        </div>
                    </div>
                    <button className="h-6 w-6 flex justify-center items-center rounded-full text-coolGray-400 transition-all ease-linear opacity-20 hover:opacity-100 hover:bg-gray-50 hover:text-black">
                        <ShareIcon />
                    </button>
                </div>
                <div className="line-clamp-2 h-10 text-sm font-normal text-coolGray-600">
                    {project.description}
            </div>
            <div className="flex items-center justify-between pt-4">
                {ChainList(project.chains || [])}
                <button className="text-gray-600 hover:border-black hover:text-black btn btn-sm btn-default !flex items-center space-x-2 border px-3 opacity-100">
                    <span className="upvote-btn-icon transition-all ease-linear">
                        <UpvoteIcon />
                    </span>
                    <span>0</span>
                </button>
            </div>
        </div>
    </div>
    );
}

export default ProjectCard;