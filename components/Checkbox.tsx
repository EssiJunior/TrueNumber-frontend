import React from "react";

interface CheckboxProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const Checkbox = ({
    label,
    onChange,
    name = "checkbox",
}: CheckboxProps) => (
    <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
            type="checkbox"
            onChange={onChange}
            name={name}
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition"
        />
        <span className="text-sm text-gray-700">{label}</span>
    </label>
);

export default Checkbox;