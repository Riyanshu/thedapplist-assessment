"use client";
import './explore.css';
import Filter from './Filter';
import SectionHeader from './SectionHeader';
import { Provider } from 'react-redux';
import store from '@/app/store/store';
import ProjectsView from './ProjectsView';

const ExplorePage = () => {
    return (
        <Provider store={store}>
            <section className='bg-[#FBFBFB]'>
            <SectionHeader />
            <div className='pb-24'>
                <div className='container'>
                    <Filter />
                    <ProjectsView />
                </div>
            </div>
            
        </section>
        </Provider>
    );
}

export default ExplorePage;