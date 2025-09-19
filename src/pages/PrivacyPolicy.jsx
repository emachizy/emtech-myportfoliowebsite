import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and usage data when you interact with our site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Information
      </h2>
      <p className="mb-4">
        We use your information to provide and improve our services, send
        updates, and communicate with you.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your personal
        information but cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Third-Party Services
      </h2>
      <p className="mb-4">
        We may use third-party services (e.g., analytics, email delivery) that
        collect data to provide better service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or request deletion of your
        personal information by contacting us.
      </p>

      <p className="mt-8 text-gray-600 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
};

export default PrivacyPolicy;
