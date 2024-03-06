import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Manage from '../pages/Manage'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'


const NavPage = () => {
  return (
    <React.Fragment>
        <section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/manage-books" element={<Manage />} />
            </Routes>
        </section>
    </React.Fragment>
  )
}

export default NavPage;