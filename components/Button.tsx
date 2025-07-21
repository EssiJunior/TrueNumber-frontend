import React from "react";
import Loader from "./Loader/Loader";

interface ButtonProps {
    isLoading?: boolean;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

const Button = ({
    isLoading = false,
    children,
    type = "submit",
    onClick,
    className = "",
}: ButtonProps) => (
    <button
        className={className + "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition flex items-center justify-center"}
        type={type}
        onClick={onClick}
        disabled={isLoading}
    >
        {isLoading ? <Loader /> : children}
    </button>
);

export default Button;