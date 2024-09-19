const ProjectCardLoader = () => {
    return (
        <div className="card-container rounded-lg border border-gray-100 bg-white p-4">
            <div className="border-b border-gray-100 pb-4">
                <div className="mb-3 flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gray-100">
                        <div className="h-11 w-11 flex-none animate-pulse rounded-full bg-gray-50" />
                    </div>
                    <div>
                        <div className="mb-1.5 h-[18px] w-[175px] animate-pulse rounded bg-gray-50 sm:w-36 lg:w-36" />
                        <div className="h-4 w-[66px] animate-pulse rounded bg-gray-50" />
                    </div>
                </div>
                <div>
                    <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-50" />
                    <div className="h-4 w-[175px] animate-pulse rounded bg-gray-50 sm:w-36 lg:w-36" />
                </div>
            </div>
            <div className="pt-4">
                <div className="h-[34px] w-full animate-pulse rounded-md bg-gray-50" />
            </div>
        </div>
    );
}

export default ProjectCardLoader;