import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const GrowthSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const name = formRef.current["user_name"].value.trim();
    const email = formRef.current["user_email"].value.trim();
    const phone = formRef.current["user_phone"].value.trim();

    if (!name || !email || !phone) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // replace with your EmailJS public key
      );

      setSuccess("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      setError("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <article className="flex flex-col justify-center">
          <h2 className="h2 text-left">
            <span className="text-primary">Your Vision</span> <br />
            Our Growth Expertise
          </h2>
          <p className="p">
            Ready to grow your Instagram effortlessly? We help you gain real,
            engaged followers, boost reach, and increase likes, comments, and
            shares—safely and authentically. Focus on content while we handle
            growth with strategies that are effective, secure, and sustainable.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition"
            >
              Let's discuss
            </Link>
            <a
              href="https://wa.me/2348165257534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border rounded-full text-gray-700 hover:bg-gray-100 transition"
            >
              💬 Chat Us On WhatsApp
            </a>
          </div>
        </article>

        {/* Right Form */}
        <aside className=" shadow-lg rounded-lg p-6 ">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Get Your Custom Growth Plan
          </h3>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4"
            noValidate
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-primary focus:border-primary focus:outline-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="user_phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone/Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm focus:border-primary p-2 focus:outline-primary border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary p-2 focus:outline-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default GrowthSection;
