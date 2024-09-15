"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};
const CtaForm = () => {
  const [formData, setFormData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/request-a-quote", formData)
      .then(() => {
        toast.success("Thank you for your interest. We will contact you soon.");
        setFormData(initialValues);
      })
      .catch(() => {
        toast.error("Failed to submit your form. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="xl:max-w-[592px] w-full sm:h-[648px] h-[816px] sm:p-9 p-6 rounded-[36px] bg-white/[12%] backdrop-blur-[16px] border border-white sm:space-y-6 space-y-3 xl:translate-y-[60px] translate-y-[36px]">
        <div className="text-center space-y-3">
          <h1 className="_subtitle_48">Request a Quote Today</h1>
          <p className="_text">
            Reach out to us today and discover how HeliosLabs.AI can drive your
            business forward.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-[18px]">
            {/* Inputs */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-[18px]">
              <div>
                <label htmlFor="fullName" className="_input_label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="_input"
                />
              </div>
              <div>
                <label htmlFor="email" className="_input_label">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="_input"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="_input_label">
                  Phone Number
                </label>
                <input
                  required
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="_input"
                />
              </div>
              <div>
                {" "}
                <label htmlFor="subject" className="_input_label">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="_input"
                />
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label htmlFor="message" className="_input_label">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text_area"
                // rows={4}
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[60px] rounded-full text-white _text_s font-semibold bg-yellow disabled:pointer-events-none disabled:opacity-70"
            >
              {isLoading ? "Please wait..." : "Submit Your Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CtaForm;
