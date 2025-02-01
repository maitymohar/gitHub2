import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { SidebarProvider } from '~/components/ui/sidebar'

type Props ={
    children:React.ReactNode
}

const SidebarLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <SidebarProvider>
        <main className='w-full m-2'>
            <div className='flex item-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4'>
                {/* Search Bar */}
                <div className='ml-auto'></div>
                <UserButton/>
            </div>
        </main>
        <div className="h-4">
            {/* main content */}
            <div className='border-sidebar-border
             bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)]'>
                {children}
             </div>
        </div>

      </SidebarProvider>
    </div>
  )
}

export default SidebarLayout
