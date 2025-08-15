import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Layout } from './ui/Layout'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { About } from './pages/About'
import { Streams } from './pages/Streams'
import { Store } from './pages/Store'
import { Admin } from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <Post /> },
      { path: 'streams', element: <Streams /> },
      { path: 'store', element: <Store /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/admin/*', element: <Admin /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)