import React from 'react'
import  SidebarData  from '../data/SidebarData'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  const activeLink ='flex justify-start items-center text-white hover:bg-green-900 pl-1 rounded-lg mt-7 w-full h-14  space-x-1 font-semi-bold'
  const normalLink ='flex justify-start items-center text-white hover:bg-slate-950 pl-1 rounded-lg mt-7 w-full h-14  space-x-1 font-semi-bold'
  return (
    <React.Fragment>
      <section>
        <div className='text-white'>
          {
            SidebarData.map((item, index)=>{
              return(
                <div key={index}>
                    
                    <NavLink to={item.path}
                    className={({ isActive }) =>
                    isActive ? activeLink: normalLink}
                    >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                    </NavLink>
                    
                </div>
              )
            })
          }
        </div>
      </section>
    </React.Fragment>
  )
}
export default Sidebar