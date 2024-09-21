import Footer from "@/components/footer/CustomFooter";
import React from "react";

const ProjectPage = () => {
  // Sample data for cards
  const cardData = [
    {
      id: 1,
      title: "Constructive and destructive waves",
      author: "Aditya Raj",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: "" // Add link here if needed
    },
    {
      id: 2,
      title: "Another Project Title",
      author: "John Doe",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: ""
    },
    {
      id: 3,
      title: "Yet Another Project",
      author: "Jane Smith",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: ""
    },
    {
      id: 4,
      title: "Yet Another Project",
      author: "Jane Smith",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: ""
    },
    {
      id: 5,
      title: "Yet Another Project",
      author: "Jane Smith",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: ""
    },
    {
      id: 6,
      title: "Yet Another Project",
      author: "Jane Smith",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s",
      link: ""
    },
    // Add more objects as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Project Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-12">
        {cardData.map((card) => (
          <Card 
            key={card.id} 
            title={card.title} 
            author={card.author} 
            imageUrl={card.imageUrl} 
            link={card.link} 
          />
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

const Card = ({ title, author, imageUrl, link }) => {
  return (
    <div className="w-288 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
      <div className="h-200 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-green-600 text-lg font-semibold">{author}</h2>
        <p className="text-gray-700 text-xl font-bold mt-2">{title}</p>
        <a
          href={link}
          className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600"
        >
          Read on Medium →
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
