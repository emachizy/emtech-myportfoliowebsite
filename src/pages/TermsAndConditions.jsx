import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        Welcome to our website. By accessing or using our services, you agree to
        comply with and be bound by the following terms and conditions. Please
        read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <p className="mb-4">
        You agree to use this website only for lawful purposes and in a manner
        that does not infringe the rights of, or restrict the use and enjoyment
        of this website by any third party.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, design, and logos are owned by us and protected by
        intellectual property laws. Unauthorized use is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Limitation of Liability
      </h2>
      <p className="mb-4">
        We will not be liable for any damages arising from the use of this
        website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="mb-4">
        We may revise these terms at any time. By continuing to use our website,
        you accept the updated terms.
      </p>

      <p className="mt-8 text-gray-600 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
};

export default TermsAndConditions;
