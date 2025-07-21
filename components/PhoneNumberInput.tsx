import { countryCodes } from "@/utils/static";
import React from "react";

interface PhoneNumberInputProps {
    label: string;
    onCountryCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput = ({
    label,
    onCountryCodeChange,
    onNumberChange,
}: PhoneNumberInputProps) => (
    <div className="mb-4 group">
        <label
            htmlFor={'phone-input'}
            className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors"
        >
            {label}
        </label>
        <div className="flex gap-2">
            <select
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                onChange={onCountryCodeChange}
                name="countryCode"
                defaultValue={'+237'}
            >
                {countryCodes.map((c, index) => (
                    <option key={index} value={c.code} defaultValue={'+237'}>
                        {c.code}
                    </option>
                ))}
            </select>
            <input
                type="tel"
                name="phoneNumber"
                onChange={onNumberChange}
                id="phone-input"
                autoComplete="tel"
                placeholder="1234567890"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <p className="text-xs text-gray-500 mt-1">Enter your phone number</p>
    </div>
);

export default PhoneNumberInput;