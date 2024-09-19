import ProjectCard from "@/app/components/ProjectCard";
import { useTypedSelector } from "@/app/hooks/useStore";
import { selectCategories, selectChain } from "@/app/store/features/slice";
import { Project } from "@/app/store/model";
import { useLazyGetListedProjectsQuery } from "@/app/store/services";
import { useState, useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectLoader from "./ProjectLoader";

const ProjectsView = () => {
    const [offset, setOffset] = useState(0);
    const [projectList, setProjectList] = useState<Project[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [ getProjects ] = useLazyGetListedProjectsQuery();
    const limit = 12;

    const categories = useTypedSelector(selectCategories);
    const chain = useTypedSelector(selectChain);

    const handleFetch = async () => {
        const res = await getProjects({
            limit,
            offset,
            categories,
            chain
        });
        if (res.data?.response) {
            setTotal(res.data.response.total);
            if (offset) {
                setProjectList(prevList => [...prevList, ...(res.data?.response.list || [])]);
            } else {
                setProjectList(res.data.response.list);
            }
        }
    };

    useEffect(() => {
        handleFetch();
    }, [offset])

    useEffect(() => {
        setProjectList([]);
        if (offset === 0) {
            handleFetch();
        } else {
            setOffset(0);
        }
    }, [categories, chain]);
    
    return (
        <InfiniteScroll
            dataLength={projectList.length}
            next={() => setOffset((prevOffset) => prevOffset + limit)}
            hasMore={total > projectList.length}
            loader={<ProjectLoader />}
            className="infinite-scroll-component grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible pt-6"
        >
        
            {projectList.map((project) => (
                <ProjectCard project={project} key={project._id} />
            ))}
        </InfiniteScroll>
    );
}

export default ProjectsView;