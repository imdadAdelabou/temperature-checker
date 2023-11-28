import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LadingPage from "./views/lading_page/LandingPage";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import DashBoard from "./views/dashboard/Dashboard";
import IndexDashBoard from "./views/dashboard/index/IndexDashBoard";
import CheckIfUserIsConnected from "./components/Guards/CheckIfUserIsConnected";
import RedirectUserWhenConnected from "./components/Guards/RedirectUserWhenConnected";
import Setting from "./views/dashboard/setting/Setting";

const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LadingPage />} />,
    <Route
      path="/login"
      element={<RedirectUserWhenConnected element={<LoginView />} />}
    />,
    <Route
      path="/register"
      element={<RedirectUserWhenConnected element={<RegisterView />} />}
    />,
    <Route
      path="/dashboard"
      element={<CheckIfUserIsConnected element={<DashBoard />} />}
    >
      <Route path="index" element={<IndexDashBoard />} />
      <Route path="setting" element={<Setting />} />
    </Route>,
  ])
);

export default routes;
