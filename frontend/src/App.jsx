
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home'
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDesription from './components/JobDesription';
import Companies from './components/admin/Companies';
import CompaniesCreate from './components/admin/CompaniesCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path:'/description/:id',
    element:<JobDesription/>
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path:'/profile',
    element:<Profile />
  },
  // start from here for admin
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CompaniesCreate/>

  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>

  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>

  },
  {
    path:"/admin/jobs/create",
    element:<PostJob/>

  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>

  }

])
function App() {
  return (
    <>

      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  )

}

export default App;