import { Navigate } from "react-router-dom"
import PageNotFound from "../pages/pageNotFound/PageNoyFound";

const PrivateRoute=({element, isUserAuthenticated})=>{

    return(
        <>
        {
            isUserAuthenticated? (element):
            (<Navigate to='/PageNotFound'></Navigate>)

            
        }
        </>

    )
}
export default PrivateRoute;