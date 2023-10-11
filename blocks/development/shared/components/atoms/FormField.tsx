import classNames from "classnames";
import React from "react";

interface FormFieldProps {
  fieldType: "text" | "select" | "textarea" | "checkbox" | "radio";
  inputType?: "text" | "number" | "email" | "tel" | "url";
  label: string | React.ReactNode;
  inputMode?: "text" | "numeric" | "tel" | "email" | "url";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  options: { label: string; value: string }[];
  name?: string;
  rows?: number;
  layout?: "horizontal" | "vertical";
}

const FormField: React.FC<FormFieldProps> = ({
  fieldType,
  label,
  inputMode,
  placeholder,
  required,
  disabled,
  value,
  options,
  inputType,
  name,
  rows,
  layout = "vertical",
}) => {
  switch (fieldType) {
    case "text":
      return (
        <li className="form-control form-control--text">
          <input
            type={inputType}
            inputMode={inputMode}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value}
            name={name}
          />
          <label className="floating-label">{label}</label>
        </li>
      );
    case "select":
      return (
        <li className="form-control form-control--select">
          <select
            name={name}
            required={required}
            disabled={disabled}
            value={value}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </li>
      );
    case "textarea":
      return (
        <li className="form-control form-control--textarea">
          <textarea
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value}
            name={name}
            rows={rows}
          />
          <label className="floating-label">{label}</label>
        </li>
      );
    case "checkbox":
      return (
        <li className="form-control form-control--checkbox text-copy-3">
          <label className="flex">
            <input
              type="checkbox"
              required={required}
              disabled={disabled}
              checked={value === "true"}
              name={name}
            />
            {label}
          </label>
        </li>
      );
    case "radio":
      return (
        <li>
          <label>{label}</label>
          <ul
            className={classNames(
              "form-control form-control--radio",
              `layout--${layout}`
            )}
          >
            {options.map((option) => (
              <li>
                <label>
                  <input
                    type="radio"
                    required={required}
                    disabled={disabled}
                    value={option.value}
                    checked={value === option.value}
                    name={name}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </li>
      );
    default:
      return null;
  }
};

export default FormField;
