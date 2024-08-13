
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Home from '../pages/home/Home'
import AboutUs from '../pages/aboutUs/AboutUs'
import PageNotFound from '../pages/pageNotFound/PageNoyFound'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../pages/dashboard/Dashboard'

import Header from '../components/header/Header'
const AppRoutes = () => {
    //simulation of api call
    const isUserAuthenticated=true;

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    {/* Public routes */}
                    <Route path='/' element={<Home />}> </Route>
                    <Route path='/aboutus' element={<AboutUs />}> </Route>
                    <Route path="*" element={<PageNotFound/>}></Route>

                    {/* Private Route */}
                    <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>} isUserAuthenticated={isUserAuthenticated}/>}></Route>
                </Routes>

            </Router>
        </>
    )
}
export default AppRoutes;