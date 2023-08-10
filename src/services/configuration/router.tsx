import { Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from 'react-router-dom'

// PAGES
import { Spinner } from '@/components/ui'
import Login from '@/pages/login/login'
import Dashboard from '@/pages/dashboard'
import Predictions from '@/pages/predictions'
import { Products } from '@/pages/products'
import { Details } from '@/pages/details'
import Sidebar from '@/components/ui/sidebar'
import { PredictionsDetails } from '@/pages/predictionsDetails'

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />

//         <Route path="/dashboard" element={<Sidebar />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="detalhes/:type/:id" element={<Details />} />
//           <Route path="produtos" element={<Products />} />
//           <Route path="predicoes" element={<Predictions />} />
//           <Route path="detalhepredicoes/:id" element={<PredictionsDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/predicoes',
    element: <Predictions />
  },
  {
    path: '/produtos',
    element: <Products />
  },
  {
    path: '/produtos/detalhes/:type/:id',
    element: <Details />
  },
  {
    path: '/detalhepredicoes/:id',
    element: <PredictionsDetails />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
