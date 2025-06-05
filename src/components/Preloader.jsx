const Preloader = () => {
  return (
    <div className="preload-container fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loading-text flex">
        {["E", "M", "T", "E", "C", "H", "."].map((letter, index) => (
          <span
            key={index}
            className="text-4xl font-bold mx-1 animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
