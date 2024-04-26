// Lib
import { NavLink } from 'react-router-dom';

// CSS
import './Nav.css';

export function Nav() {
    return (
        <nav className='nav auto-margin-padding'>
            <ul className='primary-list'>
                <li>
                    <NavLink 
                        to='/'
                        end={true}
                        className={({isActive}) => isActive == true ? 'navIsActive': undefined}>
                            TODOS OS PRODUTOS
                    </NavLink>
                </li> 

                <li>
                    <NavLink 
                        to='/camisetas'
                        className={({isActive}) => isActive == true ? 'navIsActive': undefined}>
                            CAMISETAS
                    </NavLink>
                </li>  

                <li>
                    <NavLink 
                        to='/canecas'
                        className={({isActive}) => isActive == true ? 'navIsActive': undefined}>
                            CANECAS
                    </NavLink>
                </li>
            </ul>

            <select defaultValue={"Organizar por"}>
                <option value="Organizar por" disabled>Organizar por</option>
                <option value="Novidades">Novidades</option>
                <option value="Preço: Maior - menor">Preço: Maior - menor</option>
                <option value="Preço: Menor - maior">Preço: Menor - maior</option>
                <option value="Mais vendidos">Mais vendidos</option>
            </select>
        </nav>
    );
}