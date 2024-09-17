"use client";
import ProjectCard from '@/components/ProjectCard';
import './explore.css';
import Filter from './Filter';
import SectionHeader from './SectionHeader';

const ExplorePage = () => {
    return (
        <section>
            <SectionHeader />
            <div className='pb-24'>
                <div className='container'>
                <Filter />
                <div className='infinite-scroll-component grid grid-cols-4 gap-6 overflow-visible pt-6'>
                    {Array(20).fill(0).map((_, i) => (
                        <ProjectCard key={i} />
                    ))}
                </div>
                </div>
            </div>
            
        </section>
    );
}

export default ExplorePage;