import Navbar from "../navbar/Navbar"
import './header.css'


const Header = ({categories, isLoading}) => {

    return (
        <>
            <div className="header">
                <Navbar categories={categories} isLoading={isLoading}/>
            </div>

        </>
    )
}
export default Header;