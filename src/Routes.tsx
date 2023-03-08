import { createBrowserRouter } from "react-router-dom";
import { DashboardSilo } from "./pages/dashboard-silo";
import { Home } from "./pages/home";
import { LoginPage } from "./pages/login";
import { MapPage } from "./pages/map";
import { Profile } from "./pages/profile";
import { RegisterPage } from "./pages/register";
import { ResetPassword } from "./pages/reset-password";
import { SettingsPage } from "./pages/settings";
import { UsersPage } from "./pages/users";

export const router = createBrowserRouter([
  {
    path: "/dashboard-silo",
    element: <DashboardSilo />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/map-page",
    element: <MapPage />,
  },
]);