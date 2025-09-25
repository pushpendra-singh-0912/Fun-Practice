

// ===============================================try do more good

import React, { useState } from "react";
import FormInput from "./FormInput";
import { UserPlus } from "lucide-react"; // nice icon
import SuccessModal from "../SuccessMsg/SuccessModal"; // show success message after user creation

const AddUserForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    accessRights: "",
    designation: "",
    project: "",
    contractor: "",
    loginName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // simple validation
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
      case "loginName":
        return value.trim().length < 2 ? "Must be at least 2 characters" : "";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email";
      case "phone":
        return /^[0-9]{10}$/.test(value) ? "" : "Enter 10 digit number";
      default:
        return value ? "" : "This field is required";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // ✅ just prevent refresh (no action for now)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[700px] p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <UserPlus className="text-blue-600 w-6 h-6" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Add New User
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <FormInput
            label="First Name*"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName}
          />
          <FormInput
            label="Last Name*"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName}
          />
          <FormInput
            label="Email*"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />

          {/* Dropdowns */}
          <FormInput
            label="Access Rights*"
            name="accessRights"
            as="select"
            options={["Admin", "Site Admin", "User"]}
            value={formData.accessRights}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.accessRights}
          />
          <FormInput
            label="Designation*"
            name="designation"
            as="select"
            options={["Engineer", "Manager", "Supervisor"]}
            value={formData.designation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.designation}
          />
          <FormInput
            label="Project*"
            name="project"
            as="select"
            options={["Project A", "Project B"]}
            value={formData.project}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.project}
          />
          <FormInput
            label="Contractor*"
            name="contractor"
            as="select"
            options={["Contractor X", "Contractor Y"]}
            value={formData.contractor}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contractor}
          />

          <FormInput
            label="Login Name*"
            name="loginName"
            value={formData.loginName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.loginName}
          />
          <FormInput
            label="Phone*"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
          />

          {/* Submit */}
          <div className="col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-md"
              onClick={() => setIsSuccessOpen(true)}
            >
              Create
            </button>
          </div>
        </form>
        {/*✅ Success Modal after create */}
        <SuccessModal
          open={isSuccessOpen}
          onClose={() => {
            setIsSuccessOpen(false);
            onClose(); // close AddUserForm as well
          }}
          title="User Created!"
          message="The new user has been added successfully."
          buttonText="Close"
        />
      </div>
    </div>
  );
};

export default AddUserForm;

// ============== upper is also good but not use reusalbe component
