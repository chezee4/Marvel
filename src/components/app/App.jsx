
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import HeroesPage  from "../pages/HeroesPage";
import ComicsPage from "../pages/ComicsPage";

const App = () =>{
    
        return (
            <Router basename="/Marvel">
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path="/" element={<HeroesPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;