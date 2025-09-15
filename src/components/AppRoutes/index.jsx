import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router';

import AuthLayout from '../../layouts/AuthLayout';
import AdminLayout from '../../layouts/AdminLayout';
import DefaultLayout from '../../layouts/DefaultLayout';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import Privacy from '../../pages/Privacy';
import PostDetail from '../../pages/PostDetail';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Dashboard from '../../pages/Dashboard';
import Users from '../../pages/Users';
import Settings from '../../pages/Settings';
import NotFound from '../../pages/NotFound';
import ScrollToTop from '../ScrollToTop';
function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/post/:id' element={<PostDetail />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='users' element={<Users />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path='/auth' element={<AuthLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )


}
export default AppRoutes;