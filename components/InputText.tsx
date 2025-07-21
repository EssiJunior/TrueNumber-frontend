interface InputTextProps {
  label: string;
  helper: string;
  icon: React.ReactNode | null;
  identifier: string;
  type: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputText = ({ label, helper, icon, identifier, type, handler, name }: InputTextProps) => {
  return (
    <div className="mb-4 group">
      <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors">{label}</label>
      <div className="relative">
        <input
          type={type}
          onChange={handler}
          name={name}
          id={identifier}
          autoComplete="name"
          className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {icon}
      </div>
      <p className="text-xs text-gray-500 mt-1">{helper}</p>
    </div>
  );
};

export default InputText;