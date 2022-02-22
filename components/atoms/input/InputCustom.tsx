import { FC } from "react";
import { useForm } from "react-hook-form";

interface InputProps {
  type?: string;
  className?: string;
  fieldName?: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  max?: number;
  min?: number;
  options?: any;
  register?: any;
}
const InputCustom: FC<InputProps> = ({
  type = "text",
  className,
  fieldName,
  defaultValue = "",
  required = false,
  placeholder = fieldName,
  options,
  register,
}) => {
  return (
    <input
      type={type}
      className={`${className} w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...register(`${fieldName}`, { required: required, ...options })}
    />
  );
};

export default InputCustom;
