import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserForm(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
      },
      companyName: "",
    });
  };
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Repeat similar fields for lastName, email, address, and companyName */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
