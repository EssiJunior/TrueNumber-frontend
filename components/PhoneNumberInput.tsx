import { countryCodes } from "@/utils/static";
import React from "react";

interface PhoneNumberInputProps {
    label: string;
    helper?: string;
    countryCode: string;
    number: string;
    onCountryCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    identifier?: string;
}

const PhoneNumberInput = ({
    label,
    helper = "Enter your phone number",
    countryCode,
    number,
    onCountryCodeChange,
    onNumberChange,
    name = "phone",
    identifier = "phone-input",
}: PhoneNumberInputProps) => (
    <div className="mb-4 group">
        <label
            htmlFor={identifier}
            className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors"
        >
            {label}
        </label>
        <div className="flex gap-2">
            <select
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                value={countryCode}
                onChange={onCountryCodeChange}
                name="countryCode"
            >
                {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                        {c.code}
                    </option>
                ))}
            </select>
            <input
                type="tel"
                id={identifier}
                name={name}
                value={number}
                onChange={onNumberChange}
                autoComplete="tel"
                placeholder="1234567890"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <p className="text-xs text-gray-500 mt-1">{helper}</p>
    </div>
);

export default PhoneNumberInput;