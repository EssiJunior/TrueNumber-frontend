import React, { useState } from "react";
import InputText from "@/components/InputText";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Loader from "@/components/Loader/Loader";
import { countryCodes } from "@/utils/static";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (values: any) => void;
    isLoading?: boolean;
    errorMessage?: string;
}

const initialState = {
    username: "",
    email: "",
    phoneNumber: "",
    countryCode: "+237",
    password: "",
    isAdmin: false,
};

const RegisterModal = ({
    isOpen,
    onClose,
    onRegister,
    isLoading = false,
    errorMessage = "",
}: RegisterModalProps) => {
    const [values, setValues] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({
            ...prev,
            phoneNumber: e.target.value,
        }));
    };

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues((prev) => ({
            ...prev,
            countryCode: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onRegister(values);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-6 text-center">
                    Register
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <InputText
                        label="Username"
                        helper="Enter your username"
                        type="text"
                        name="username"
                        handler={handleChange}
                    />
                    <InputText
                        label="Email"
                        helper="Enter your email"
                        type="email"
                        name="email"
                        handler={handleChange}
                    />
                    <PhoneNumberInput
                        label="Phone Number"
                        countryCode={values.countryCode}
                        number={values.phoneNumber}
                        onCountryCodeChange={handleCountryCodeChange}
                        onNumberChange={handlePhoneChange}
                    />
                    <InputText
                        label="Password"
                        helper="Enter your password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        handler={handleChange}
                        icon={
                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        }
                    />
                    <Checkbox
                        label="I am an admin"
                        onChange={handleChange}
                        name="isAdmin"
                    />
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mt-2 text-center">
                            {errorMessage}
                        </div>
                    )}
                    <Button type="submit" isLoading={isLoading}>
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;