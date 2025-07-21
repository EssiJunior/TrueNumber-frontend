import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  identifier?: string;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  name = "checkbox",
  identifier = "checkbox-input",
}: CheckboxProps) => (
  <label className="flex items-center gap-2 cursor-pointer select-none">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      name={name}
      id={identifier}
      className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition"
    />
    <span className="text-sm text-gray-700">{label}</span>
  </label>
);

export default Checkbox;