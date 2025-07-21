"use client";

// EXTERNAL COMPONENTS
import { useState, useEffect } from "react";

// INTERNAL COMPONENTS

// CUSTOM HOOKS
import { useSidebar } from "@/hooks/useSidebarToggle";


// STYLES
import "@/styles/dashboard_tabular_pages.css";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination/Pagination";
import UserRow from "@/components/TableRows/UserRow";
import DashboardHeader from "@/containers/DashboardHeader";
import { getUsers } from "@/requests/users";
import RegisterModal from "@/components/Modals/RegisterModal";

const Users = () => {
    const [users, setUsers] = useState([]);

    // HOOKS
    const [isLoading, setIsLoading] = useState(false);
    const [isLogingOut, setIsLogingOut] = useState(false);
    const { isOpen } = useSidebar();

    // FUNCTIONS
    function refresh() {
        // Refresh logic

        getUsers(setIsLoading, setUsers)
    }
    useEffect(() => {
        //   if (admin === null || admin.role !== 'ADMIN')
        //     navigate('/signin')
        //   else {
        //     refresh(dispatch)
        //   }
        refresh()

    }, [])
    return (
        <div className={`dashboard-tabular-pages ${!isOpen && 'dashboard-tabular-pages-wided'}`} >
            <div className="wrapper">
                <DashboardHeader />

                <div className="actions">
                    {/* <ModalContainer triggerText={'Nouveau'} formToDisplay={<ClientForm />} /> */}
                    <Button onClick={() => refresh()} isLoading={isLoading}>
                        Refresh
                    </Button>
                </div>

                <div className="data">
                    {
                        isLoading ?
                            <div>
                                Loading
                            </div> :
                            <table>
                                <thead>
                                    <tr className="[&>th]:!text-lg">
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Telephone</th>
                                        <th>Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Pagination data={users} RenderComponent={UserRow} pageLimit={1} dataLimit={5} tablePagination={true} />
                                </tbody>
                            </table>
                    }
                </div>

            </div>

            {/* <RegisterModal isOpen={true}  /> */}
        </div>
    );
};

export default Users;
