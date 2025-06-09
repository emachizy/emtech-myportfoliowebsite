const AffiliateSidebar = ({
  title = "Featured Deal",
  productName = "Smart Fitness Tracker",
  description = "Track workouts, heart rate, and steps in real time with this premium fitness tracker.",
  image = "https://via.placeholder.com/300x200?text=Affiliate+Product",
  link = "https://your-affiliate-link.com",
  buttonText = "Shop Now",
}) => {
  return (
    <aside className="sticky top-24 self-start bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold text-primary mb-4">{title}</h2>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block object-cover"
      >
        <img
          src={image}
          alt={productName}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <p className="text-sm font-semibold mb-2">{description}</p>
        <button className="bg-primary text-white px-4 py-2 w-full rounded hover:bg-opacity-90 transition cursor-pointer">
          {buttonText}
        </button>
      </a>
    </aside>
  );
};

export default AffiliateSidebar;
