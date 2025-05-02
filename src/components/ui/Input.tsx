import { cn } from '@/lib/utils';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
  className?: string;
}

const Input = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  value,
  onChange,
  label,
  error,
  className,
}: InputProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm tracking-wider uppercase text-stone-600"
      >
        {label}
        {required && <span className="text-clay-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none transition-colors bg-white text-stone-700",
          className
        )}
        value={value}
        onChange={onChange}
        aria-label={label}
        aria-required={required}
        aria-invalid={!!error}
      />
      {error && (
        <p className="mt-1 text-sm text-danger-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input; 