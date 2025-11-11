// src/components/QuoteModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const QuoteModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let messages = [];
    if (!name.trim()) messages.push("Name is required!");
    if (!email.trim()) messages.push("Email is required!");
    if (!subject.trim()) messages.push("Subject is required!");
    if (!message.trim()) messages.push("Message is required!");

    if (messages.length > 0) {
      setErrors(messages.join(", "));
      toast.error("Please fill in all fields");
      return;
    }

    setErrors("");
    setIsSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const response = await fetch(
        "https://formsubmit.co/27ef4252af3e43c55bb019f2befb212d",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        onClose();
      } else {
        toast.error("Form submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center">
              Request a Quote
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Fill in the form and we’ll get back to you within 12 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                required
              />
              <textarea
                placeholder="Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
                required
              ></textarea>

              {errors && <p className="text-red-500 text-sm">{errors}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-semibold py-2 rounded hover:bg-[#8c876a] transition"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
