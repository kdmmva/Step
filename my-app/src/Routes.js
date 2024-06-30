import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const homeChildren = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

const routes = [
  {
    path: "/",
    element: <Home />,
    children: homeChildren,
  },
  {
    path: "/home",
    element: <Home />,
    children: homeChildren,
  },
];

export default routes;
