
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

// import Home from '../pages/home/Home'
 import AboutUs from '../pages/aboutUs/AboutUs'
import Header from '../components/header/Header'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import Loader from '../components/loader/Loader'

import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/dashboard/Dashboard'
import ProductListing from '../pages/productListing/ProductListing';


import useFetchData from '../hooks/useFetchData';
const AppRoutes = () => {
    //simulation of api call
    const isUserAuthenticated = true;
    const { data: categories, error, isLoading } = useFetchData('https://fakestoreapi.com/products/categories', []);

    //console.log("data is", data);

    return (
        <>
            <Router>
                <Header categories={categories} isLoading={isLoading}/>

                <Routes>
                    {/* Public routes */}
                    {/* <Route path='/' element={<Home />}> </Route>*/}
                    <Route path='/aboutus' element={<AboutUs />}> </Route> 

                //<Route path='/users/:userId/posts/:postId' element={<PostDetails/>}/>
                 {/* dynamic Routing */}
                 <Route path={'/products/:categoryName'} element={<ProductListing/>}></Route> 
                    <Route path="*" element={<PageNotFound />}></Route>

                    {/* Private Route */}
                    <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} isUserAuthenticated={isUserAuthenticated} />}></Route>
                </Routes>

            </Router>
        </>
    )
}
export default AppRoutes;