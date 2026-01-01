import type { ChangeEvent } from "react";

type SelectProps = {
  value: string | number;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { name: string; value: string | number }[];
  label: string;
  disabled?: boolean;
};

export default function Select({
  value,
  onChange,
  options,
  label,
  disabled,
}: SelectProps) {
  return (
    <div className='flex flex-col items-start gap-1'>
      <label htmlFor={label} className='text-xs text-slate-500 ml-1'>
        {label}
      </label>

      <select
        name={label}
        id={label}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className='bg-gray-300 hover:bg-gray-400 cursor-pointer transition ease-in active:ring-0 active:border-0 p-2 min-w-50 sm:min-w-full'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
