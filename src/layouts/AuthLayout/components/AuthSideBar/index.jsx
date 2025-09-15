import { NavLink } from "react-router";
import { Link } from "react-router";
function AuthSideBar() {
    return <>
        <NavLink to="/auth/login"
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
            Login</NavLink>
        <NavLink to="/auth/register"
            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
            Register
        </NavLink>
    </>
}
export default AuthSideBar;