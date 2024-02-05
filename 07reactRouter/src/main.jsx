import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubinfoLoader} from './components/Github/Github.jsx'
//one way to create router
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },{
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//another way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='user/:userid' element={<User />}/>
        {/* loader allows us to directly call api that is before useEffect 
        and keep it in cache and is a great optimization, you can even fire api callls inside it */}
        <Route loader={githubinfoLoader}
        path='github' element={<Github />}/>
        
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
