import {Link, NavLink} from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
            <Link to="/">
              <span>Marvel</span> information portal
            </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                <li>
                    <NavLink
                        end
                        style={({isActive}) => ({color: isActive ? '#b30f22' : "inherit"})}
                        to="/">Characters
                    </NavLink>
                </li>
                <span>/</span>
                <li>
                    <NavLink
                       style={({isActive}) => ({color: isActive ? '#b30f22' : "inherit"})}
                       to="/comics">Comics
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;