import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";

const LazyLoading  = lazy(() => import('../lazyLoading/LazyLoading'));
const Page404 = lazy(() => import('../pages/404'));
const HeroesPage = lazy(() => import('../pages/HeroesPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));


const App = () =>{
    
        return (
            <Router basename="/Marvel">
                <div className="app">
                <Suspense fallback={<LazyLoading/>}>
                    <AppHeader/>
                    <main style={{height:'80vh'}}>
                        <Routes>
                            <Route path="/" element={<HeroesPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </main>
                    </Suspense>
                </div>
            </Router>
        )
}

export default App;