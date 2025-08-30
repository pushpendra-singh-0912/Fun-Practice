// components/FormInput.jsx
import React from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  as,
  options = [],
}) => {
  const borderColor = !touched
    ? "border-gray-300"
    : error
    ? "border-red-500"
    : "border-green-500";

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      {as === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`border ${borderColor} rounded-md px-3 py-2 focus:outline-none`}
        >
          <option value="">Select</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`border ${borderColor} rounded-md px-3 py-2 focus:outline-none`}
          placeholder={label}
        />
      )}
      {touched && error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {touched && !error && value && (
        <p className="text-green-500 text-xs mt-1">Looks good!</p>
      )}
    </div>
  );
};

export default FormInput;
