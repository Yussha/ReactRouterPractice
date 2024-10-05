import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//pages
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Faq from './Pages/help/Faq'
import Contact, { contactAction } from './Pages/help/Contact'
import NotFound from './Pages/NotFound'
import Careers, { careersLoader } from './Pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './Pages/careers/CareerDetails'
import CareersError from './Pages/careers/CareersError'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App



