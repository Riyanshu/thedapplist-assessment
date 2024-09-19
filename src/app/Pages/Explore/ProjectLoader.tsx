import ProjectCardLoader from "@/app/components/ProjectCardLoader";
import { memo } from "react";

const ProjectLoader = memo(() => {
    return (
        <>
            {Array.from({ length: 12 }).map((_, index) => (
                <ProjectCardLoader />
            ))}
        </>
    );
})

export default ProjectLoader;