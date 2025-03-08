import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/layout.tsx"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Movies from "./pages/Movies"
import TvSeries from "./pages/TVSeries"
import ContentDetail from "./pages/ContentDetail"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/tvseries",
        element: <TvSeries/>
      },
      {
        path: "/contentdetail",
        element: <ContentDetail/>
      },
    ]
  }
])

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
