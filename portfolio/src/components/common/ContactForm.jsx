import React, { useState } from "react";

const GOOGLE_SHEETS_URL = 
"https://script.google.com/macros/s/AKfycbybngvsKbGgxLLMEw0FQ07BbH89mVwtm7jEFjzbEsL_jLl27l0qcHT1w11lORbMN3WzgA/exec";

  const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.result === "success") {
        setSubmitted(true);
      } else {
        setSubmitError("Failed to submit. Please try again later.");
      }
    } catch (err) {
      setSubmitError(
        "Failed to submit. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-3xl text-cyan-400 mb-2">✓</div>
        <h3 className="text-xl font-bold mb-2 text-center">
          Thank you for reaching out!
        </h3>
        <p className="text-gray-300 mb-4 text-center">
          We have received your message and will get back to you soon.
        </p>
        <button
          className="mt-2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none"
          required
          disabled={loading}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none"
          required
          disabled={loading}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none"
          required
          disabled={loading}
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none min-h-[100px]"
          required
          disabled={loading}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      {submitError && (
        <p className="text-red-400 text-sm text-center">{submitError}</p>
      )}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-2 rounded hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
