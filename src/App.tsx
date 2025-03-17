import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/layout.tsx"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TvSeries/index.tsx"
import MoviesDetail from "./pages/MoviesDetail/index.tsx"
import TvSeriesDetail from "./pages/TvSeriesDetail/index.tsx"
import Login from "./pages/Login/index.tsx"
import "./firebase"
import SignUp from "./pages/SIgnUp/index.tsx"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvseries",
        element: <TvSeries />,
      },
      {
        path: "/movie/:id",
        element: <MoviesDetail />,
      },
      {
        path: "/tv/:id",
        element: <TvSeriesDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
