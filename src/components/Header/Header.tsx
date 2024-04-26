// Lib
import { Link } from 'react-router-dom';

// Component
import { SearchBar } from '../SearchBar/SearchBar';

// CSS
import './header.css';

export function Header() {
    return (
       <header className='header auto-margin-padding'>
            <Link to='/'>
                <h1 className='logo'>capputeeno</h1>
            </Link>

            <div className='header-side-left'>
                <div className="desktop-search-bar">
                    <SearchBar /> 
                </div>
                
                <div className='header-side-right'>
                    <Link to='/payment'>
                        <svg className="icon icon-shopping-bag">  
                            <use xlinkHref="/public/icons.svg#shopping-bag"></use>
                        </svg>
                    </Link>
                    <span className='count-total-item'>2</span>
                </div>
            </div>

            <div className="search-bar-mobile">
                <SearchBar /> 
            </div>
       </header>
    );
}