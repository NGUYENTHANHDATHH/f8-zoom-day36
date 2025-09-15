import { Outlet } from 'react-router';
import Header from '../components/Header'
import AuthSideBar from './components/AuthSideBar'
function AuthLayout() {
    return <div>
        <Header />
        <AuthSideBar />
        <div>
            <Outlet />
        </div>
    </div>;
}
export default AuthLayout;