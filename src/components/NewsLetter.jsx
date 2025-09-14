import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Subscribed successfully!");
          setStatus("✅ Thanks for subscribing!");
          setEmail("");
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Subscription failed. Please try again.");
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="w-[90%] flex md:flex-row flex-col border border-gray-300 rounded-lg items-start md:items-center justify-between gap-8 text-sm p-8 mx-auto"
    >
      {/* Newsletter Text + Form */}
      <div className="max-w-md w-full">
        <h1
          id="newsletter-heading"
          className="text-3xl font-semibold text-gray-800"
        >
          Subscribe to our newsletter
        </h1>
        <p className="text-gray-600 mt-2">
          Stay updated with our latest articles, tips, and insights delivered
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-full items-center gap-4 mt-8"
          noValidate
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="py-2 px-3 w-full md:max-w-64 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#9d9577] focus:border-[#9d9577] transition"
          />
          <button
            type="submit"
            className="w-full md:w-auto group bg-gradient-to-r from-yellow-600 to-yellow-900 hover:from-yellow-900 hover:to-yellow-700 text-white px-6 py-2 rounded-xl font-semibold text-lg transition-colors duration-300 transform flex items-center gap-2 justify-center cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
      </div>

      {/* Features */}
      <article className="space-y-4 md:max-w-48">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 w-max p-2.5 rounded">
            {/* Weekly Articles Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981M6.417 3.667V2.292m9.167 1.375V2.292m4.125 5.958H9.854m-8.02 0h3.552"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-base font-medium text-gray-800">
            Weekly articles
          </h3>
        </div>
        <p className="text-gray-600">
          Get curated weekly insights and tips — practical, useful, and easy to
          digest.
        </p>
      </article>

      <article className="space-y-4 md:max-w-48">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 w-max p-2.5 rounded">
            {/* No Spam Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-base font-medium text-gray-800">No spam</h3>
        </div>
        <p className="text-gray-600">
          We respect your inbox — only meaningful updates, never spam.
        </p>
      </article>
    </section>
  );
}

export default NewsLetter;
