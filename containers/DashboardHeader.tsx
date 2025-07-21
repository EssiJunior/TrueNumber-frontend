"use client";

import { useSidebar } from '@/hooks/useSidebarToggle';
import { ToggleLeftIcon } from 'lucide-react'

const DashboardHeader = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <>
            <div className="actions flex !justify-between items-center w-full ">
                <div className="bg-alternative3/10 p-2 rounded-full ease-in-out duration-200 hover:scale-105" onClick={toggleSidebar}>
                    <ToggleLeftIcon className='rotate-180 cursor-pointer text-alternative3' />
                </div>
            </div>
        </>
    )
}

export default DashboardHeader