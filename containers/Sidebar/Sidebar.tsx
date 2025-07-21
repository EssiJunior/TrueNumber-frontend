"use client";

// STYLE
import { useSidebar } from '@/hooks/useSidebarToggle';
import './sidebar.css'
import { Gamepad, Home, PersonStanding } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
    const { isOpen } = useSidebar();

    const paths = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <Home />,
        },
        {
            name: 'Users',
            link: '/dashboard/users',
            icon: <PersonStanding />,
        },
        {
            name: 'Parties',
            link: '/dashboard/parties',
            icon: <Gamepad />,
        }
    ]
    return (
        <main className={isOpen ? `sidebar  ` : 'sidebar-minimised  '}>
            <nav className='nav bg-blue-900'>
                <ul>
                    {
                        paths.map((item, index) => (
                            // <li key={index} style={path === '/dashboard/admin' ? {margin:'1.5em 0'}:{}}>
                            <li key={index} className='!text-white' onMouseEnter={() => onPlayPress(item.ref)}>
                                <Link href={item.link} className={`text-white text-xl font-mono mr-3`}>
                                    <span className={`${!isOpen && 'hidden'}`}>{item.name}</span>

                                    <div className="icon cursor-pointer">
                                        {item.icon}
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </main>
    )
}

export default Sidebar