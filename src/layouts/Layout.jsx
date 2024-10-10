import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

//for the explaination of how layout works and tell how it render its child components inside it 

// Layout Component:

// Contains your Header, Footer, and the Outlet component.
// The Outlet is a placeholder that tells React Router where to render the child route components.
// Routes Setup:

// A parent route (path="/") uses the Layout component as its element.
// Child routes like /about, /event, etc., are defined inside this parent route. These routes will be rendered inside the Outlet within Layout.
// Outlet Behavior:

// When you navigate to /about, React Router will render the About component inside the Outlet, maintaining the same layout structure with the Header and Footer.