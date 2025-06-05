import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black animate-fade-in">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg animate-bounce">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-white animate-fade-in-slow">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-300 animate-fade-in-slower">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 font-semibold animate-fade-in-slowest"
      >
        Go Back Home
      </a>
      <style>
        {`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in { animation: fade-in 0.8s ease-out; }
                .animate-fade-in-slow { animation: fade-in 1.2s 0.2s ease-out both; }
                .animate-fade-in-slower { animation: fade-in 1.6s 0.4s ease-out both; }
                .animate-fade-in-slowest { animation: fade-in 2s 0.6s ease-out both; }
            `}
      </style>
    </div>
  );
};

export default NotFound;
