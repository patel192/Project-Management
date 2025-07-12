import React from 'react'
import { UserNavbar } from './UserNavbar'
import { UserSidebar } from './UserSidebar'
export const UserDashBoard = ({ children }) => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <UserNavbar />
        <main className="p-6 bg-[#0B1D51] flex-1 text-[#91C8E4]">
          {children}
        </main>
      </div>
    </div>
  )
}
