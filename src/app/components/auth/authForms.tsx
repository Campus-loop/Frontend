

// components/FormField.tsx
type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};





export function FormField({ id, label, error, children }: FieldProps) {
  return (
    <fieldset className="mb-4">
      <legend className="mb-[12px]">{label}</legend>
      <div>
        {children}
        {error && (
          <p id={`${id}-error`} className="my-2 text-xs text-rose-500">
            {error}
          </p>
        )}
      </div>
    </fieldset>
  );
}

// components/TextInput.tsx
import { forwardRef } from "react";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};
export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={[
        "w-full min-h-12 px-[16px] py-[12px] text-[14px] bg-white",
        "transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary",
        "placeholder-[#9CA3AF] border border-[#DADEE5] rounded-md",
        hasError ? "md:px-5 w-full appearance-none text-input lg:text-sm font-body min-h-12 transition duration-200 ease-in-out focus:shadow focus:bg-white focus:border-primary !border-1 !border-rose-500 box-border py-[12px] px-[16px] bg-white text-[14px] placeholder-[#9CA3AF] border-solid rounded border-[#DADEE5] border rounded-md" : "",
        className,
      ].join(" ")}
      aria-invalid={hasError || undefined}
      {...props}
    />
  )
);

// components/SubmitBar.tsx
export function SubmitBar({ disabled }: { disabled?: boolean }) {
  return (
    <div className="pt-2 mt-auto w-full bg-white fixed bottom-0 left-0 border-t border-jnGray-300 sm:relative sm:mt-auto sm:border-t-0">
      <button
        type="submit"
        disabled={disabled}
        className={[
          "rounded inline-flex justify-center items-center gap-2 px-4 py-[14px] w-full h-13 text-white border",
          disabled
            ? "bg-jnGray-400 border-jnGray-400 cursor-not-allowed"
            : "bg-jnGray-900 border-jnGray-900 active:border-jnGray-700",
        ].join(" ")}
        name="submit"
      >
        <span className="font-medium body-medium-16">Submit</span>
      </button>
    </div>
  );
}