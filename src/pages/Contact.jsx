import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Waves from "../components/utils/Waves";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let messages = [];
    if (name.trim() === "") {
      messages.push("Name is required!");
      toast.error("Name is required!");
    }
    if (email.trim() === "") {
      messages.push("Please enter a valid email address!");
    }
    if (subject.trim() === "") {
      messages.push("Subject is required!");
    }
    if (message.trim() === "") {
      messages.push("Message is required!");
    }

    if (messages.length > 0) {
      setErrors(messages.join(", "));
      setIsSubmitting(false);
    } else {
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
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
          }
        );
        if (response.ok) {
          toast.success("Form submitted successfully");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          console.error("Form submission failed");
          toast.error("Form submission failed. Please try again.");
          setErrors("Form submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      <Waves
        lineColor="#c49102"
        backgroundColor="rgba(252, 252, 252, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="relative w-full max-w-[95vw] mx-auto my-10 rounded-4xl bg-gray-100 pt-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:justify-between mb-8 py-8 md:py-0 border-t border-b border-gray-300 px-4 md:px-16 bg-gray-50"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 md:mb-6 md:py-10">
              Contact
            </h2>
            <div className="bg-gray-200 w-32 h-0.5 rounded-full mt-2 md:hidden">
              <div className="bg-primary h-0.5 w-10 rounded-full" />
            </div>
          </div>
          <p className="text-gray-500 text-xs md:py-2">Get in touch</p>
        </motion.div>

        <div className="md:px-16 px-4">
          <div className="mb-10">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0929352728995!2d3.337391173667863!3d6.595817393397945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92276da3a293%3A0xe37eff5829bebc22!2s5%20Adepele%20St%2C%20Computer%20Village%2C%20Ikeja%20101233%2C%20Lagos!5e1!3m2!1sen!2sng!4v1749020135915!5m2!1sen!2sng"
              className="w-full h-40 rounded-md border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-6">
                <Phone className="text-primary" />
                <div>
                  <p className="font-semibold">+234-816-525-7534</p>
                  <p>We're always available to take your calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <MapPin className="text-primary" />
                <div>
                  <p className="font-semibold">Lagos, Nigeria</p>
                  <p>5 Adepele Street, Ikeja</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="text-primary" />
                <div>
                  <p className="font-bold">hello@emtech.com.ng</p>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-1">
                  How Can I Help You?
                </h3>
                <div className="bg-gray-100 h-0.5 w-46">
                  <div className="bg-primary h-0.5 w-8 "></div>
                </div>
              </div>
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
              {errors && <p className="text-red-500 mb-4">{errors}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-primary text-white rounded hover:bg-[#8c876a] transition"
              >
                {isSubmitting ? "Submitting..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
