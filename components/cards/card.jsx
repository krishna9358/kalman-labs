const Card = () => {
  return (
    <div className="w-288 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
      <div className="h-200 overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s"
          alt="Probability Word Cloud"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-green-600 text-lg font-semibold">Aditya Raj</h2>
        <p className="text-gray-700 text-base mt-2">Constructive and destructive waves</p>
        <a
          href=""
          className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600"
        >
          Read on Medium →
        </a>
      </div>
    </div>
  );
};

export default Card;
