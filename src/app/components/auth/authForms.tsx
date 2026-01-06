

// components/FormField.tsx
type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};


export type Values = { email: string; name:string; password: string; passwordConf: string };
export type Errors = { email?: string; name?:string; password?: string; passwordConf?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pwNumberRe = /[0-9]/;
const pwSpecialRe = /[!@#$%^&*()_\-+={[}\]|\\:;"'<>,.?/]/;

export function validateRegister(v: Values): Errors {
  const next: Errors = {};
  if (!emailRe.test(v.email)) next.email = "Enter a valid email address";
  else if (!v.email.endsWith(".edu")) next.email = "Only .edu emails are allowed";


  // more than 4 characters
  if (!v.name || v.name.trim().length === 0) {
    next.name = "Name is required";
  } else if (v.name.trim().length < 4) {
    next.name = "Name must be at least 4 characters";
  }

  if (v.password.length < 6) next.password = "Password must be at least 6 characters";
  else if (!pwNumberRe.test(v.password)) next.password = "Password must include at least one number";
  else if (!pwSpecialRe.test(v.password)) next.password = "Password must include at least one special character";

  if (v.passwordConf !== v.password) next.passwordConf = "Passwords do not match";
  return next;
}




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