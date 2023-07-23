
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import HeroesPage  from "../pages/HeroesPage";
import ComicsPage from "../pages/ComicsPage";
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComicPage";

const App = () =>{
    
        return (
            <Router basename="/Marvel">
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path="/" element={<HeroesPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;