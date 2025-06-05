// components/LazyImage.jsx
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function LazyImage({
  src,
  alt,
  className,
  placeholderClassName = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!loaded && (
        <div
          className={`absolute inset-0 bg-gray-100 animate-pulse rounded-full ${placeholderClassName}`}
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded-full transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
