
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import Loader from '../loader/Loader';
const Navbar = ({ categories, isLoading }) => {

    return (
        <>
            <nav className='nav'>
                <div className='nav-left'>
                    <ul className='nav-items'>
                        {isLoading && <Loader />}
                        {/* <li className='nav-items'><NavLink to="/" className='nav-link' > Home  </NavLink>   </li>
                        <li className='nav-items'><NavLink to="AboutUs" className='nav-link'>About us</NavLink> </li>
                        <li className='nav-items'><NavLink to="contact" className='nav-link'>Contact us</NavLink> </li> */}
                        {
                            categories && categories.length > 0 ? categories.map((item, idx) => {
                                return (
                                    <li className='nav-items' key={idx + 1}>
                                        <NavLink
                                            to={`/products/${item}`}
                                            className='nav-link' > {item}  </NavLink>
                                    </li>
                                )
                            }) : <></>
                        }
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Navbar;