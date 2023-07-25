import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";

import LazyLoading from '../lazyLoading/LazyLoading';
const Page404 = lazy(() => import('../pages/404'));
const HeroesPage = lazy(() => import('../pages/HeroesPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));


const App = () =>{
    
        return (
            <Router basename="/Marvel">
                <div className="app">
                    <AppHeader/>
                    <main style={{minHeight:'80vh'}}>
                       <Suspense fallback={<LazyLoading/>}>
                            <Routes>
                                <Route path="/" element={<HeroesPage/>}/>
                                <Route path="/comics" element={<ComicsPage/>}/>
                                <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                                <Route path="*" element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </Router>
        )
}

export default App;