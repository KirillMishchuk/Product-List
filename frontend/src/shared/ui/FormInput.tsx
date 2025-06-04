// shared/ui/FormInput.tsx
import { type InputHTMLAttributes, forwardRef } from "react";
import { Input } from "./Input";

type FormInputProps = {
    label: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, error, ...inputProps }, ref) => (
        <div>
            <label className="block mb-1 font-semibold">{label}</label>
            <Input
                ref={ref}
                {...inputProps}
                className="w-full border px-4 py-2 rounded"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
);

FormInput.displayName = "FormInput";
