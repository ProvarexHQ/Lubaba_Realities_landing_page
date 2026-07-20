import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home         from './pages/Home'
import Properties   from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import WhoWeAre     from './pages/WhoWeAre'
import Contact      from './pages/Contact'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0,0) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F0]">
      <ScrollTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'properties', element: <Properties /> },
      { path: 'properties/:id', element: <PropertyDetail /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:id', element: <ServiceDetail /> },
      { path: 'who-we-are', element: <WhoWeAre /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
})

export default function App() {
  return <RouterProvider router={router} />
}
