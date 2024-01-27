import './App.css'
import { Suspense, lazy } from 'react'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const LazyPage404 = lazy(() => import('./pages/404.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
]

export const App = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          {/* <Route path='/about' Component={LazyAboutPage} /> */}
        </Router>
      </Suspense>

    </main>
  )
}
