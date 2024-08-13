
import {Link} from 'react-router-dom';
const Navbar=()=>{

    return(
        <>
        <ul>
            <li><Link to="/"> Home  </Link>      </li>
            <li><Link to="AboutUs">About us</Link></li>
        </ul>
        </>
    )
}
export default Navbar;