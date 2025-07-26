import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default Layout;
