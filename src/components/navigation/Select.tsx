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
      <label
        htmlFor={label}
        className='text-xs font-medium tracking-wide text-slate-400 ml-1'
      >
        {label}
      </label>

      <select
        name={label}
        id={label}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className='
    w-full
    appearance-none
    rounded-xl
    bg-slate-600
    border
    border-slate-400
    px-4
    py-2.5
    text-sm
    font-medium
    tracking-wide
    text-slate-200
    shadow-sm
    transition
    hover:border-slate-400
    hover:bg-slate-700
    focus:outline-none
    focus:ring-2
    focus:ring-slate-500/40
    focus:border-slate-500
    disabled:opacity-50
    disabled:cursor-not-allowed
  '
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
