import { useState } from "react";
import "./pagination.css";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

//Pagination component
//This component permit you to do pagination on data
type PaginationProps = {
    data: any[];
    RenderComponent: React.ComponentType<any>;
    isProduct?: boolean;
    pageLimit: number;
    dataLimit: number;
    tablePagination?: boolean;
};

export default function Pagination({ data, RenderComponent, isProduct, pageLimit, dataLimit, tablePagination }: PaginationProps) {
    const pages = Math.floor(data.length / dataLimit) + 1;
    const [currentPage, setCurrentPage] = useState(1);
    //Go to the next page
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
    //Go to the previous page
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    //Change a page
    // function changePage(event) {
    //     const pageNumber = Number(event.target.textContent);
    //     setCurrentPage(pageNumber);
    // }
    //Get the page data
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <>
            {tablePagination ? (

                getPaginatedData().length === 0 ?
                    <tr className=" w-full text-center text-white">
                        <td colSpan={100} className="bg-red-400 text-center text-white">
                            Empty
                        </td>
                    </tr>
                    :
                    getPaginatedData().map((data, idx) => <RenderComponent key={idx} {...data} />)
            ) : (
                <div>
                    {
                        getPaginatedData().map((data, idx) => (
                            <RenderComponent key={idx} {...data} />
                        ))}
                </div>
            )}

            {data.length > dataLimit && (
                <div className="pagination" style={isProduct ? { right: "2%", top: '-130%' } : {}}>
                    <div onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                        <ArrowLeftCircle />
                    </div>
                    {getPaginationGroup().map((item, index) => (
                        <div key={index} className={`paginationItem  ${currentPage === item ? "active" : ""}`}>
                            <span className="text-white font-mono">{item}/{pages}</span>
                        </div>
                    ))}
                    <div onClick={goToNextPage} className={`next ${currentPage >= pages ? "disabled" : ""}`}>
                        <ArrowRightCircle />
                    </div>
                </div>
            )}
        </>
    );
}