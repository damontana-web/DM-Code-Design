import type { ReactNode } from "react";

interface CheckboxProps {
  label: string;
  id: string;
  name?: string;
  children?: ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ label, id, name = "remember-me", children, defaultChecked, onChange }: CheckboxProps) {
  return (
    <div className="flex items-center">
      <div className="flex">
        <input
          id={id}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="h-4 w-4 rounded border-neutral-300 text-[#EA2295] focus:ring-[#EA2295] dark:border-neutral-600 dark:bg-neutral-700 dark:checked:border-[#EA2295] dark:checked:bg-[#EA2295] dark:focus:ring-offset-neutral-800"
        />
      </div>
      <div className="ms-3">
        <label htmlFor={id} className="text-sm text-neutral-800 dark:text-neutral-200">
          {label} {children}
        </label>
      </div>
    </div>
  );
}
