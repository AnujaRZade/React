import { Navigate } from "react-router-dom"
import PageNotFound from "../pages/pageNotFound/PageNotFound";

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