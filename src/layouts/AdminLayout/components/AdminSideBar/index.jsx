import { Link } from 'react-router';
function AdminSideBar() {
    return <>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/settings">Settings</Link>
    </>
}
export default AdminSideBar;