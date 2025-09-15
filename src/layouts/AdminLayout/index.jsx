import { Outlet } from "react-router";
import Header from "../components/Header";
import AdminSideBar from "./components/AdminSideBar";
import AdminFooter from "./components/AdminFooter";

function AdminLayout() {
    return <>
        <Header />
        <AdminSideBar />
        <div>Admin Layout</div>
        <div>
            <Outlet />
        </div>
        <AdminFooter />
    </>

}
export default AdminLayout;