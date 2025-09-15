import Header from '../components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router';
function DefaultLayout() {
    return <>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
}
export default DefaultLayout;