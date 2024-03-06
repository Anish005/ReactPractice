import React from 'react'
import Navbar from './Navbar'
import  Sidebar  from './Sidebar'
import NavPage from './NavPage'

export const MainPage = () => {
  return (
    <React.Fragment>
      {/* heading section */}
        <section>
          <div>
            <Navbar />
          </div>
        </section>
      
      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div
          className='col-span-2 bg-slate-800 h-screen pl-2'
          >
              <Sidebar />
          </div>
          <div
          className='col-span-10 bg-slate-500 h-screen pl-2'
          >
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
