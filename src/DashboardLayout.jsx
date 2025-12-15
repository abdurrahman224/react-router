import { Outlet, Link, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <>
      <h2>Dashboard</h2>

      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <button onClick={logout}>Logout</button>

      <hr />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
