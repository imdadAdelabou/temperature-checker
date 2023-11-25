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
import CheckIfUserIsConnected from "./components/CheckIfUserIsConnected";

const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LadingPage />} />,
    <Route path="/login" element={<LoginView />} />,
    <Route path="/register" element={<RegisterView />} />,
    <Route
      path="/dashboard"
      element={<CheckIfUserIsConnected element={<DashBoard />} />}
    >
      <Route path="index" element={<IndexDashBoard />} />
      <Route path="setting" element={<h1>Settings</h1>} />
    </Route>,
  ])
);

export default routes;
