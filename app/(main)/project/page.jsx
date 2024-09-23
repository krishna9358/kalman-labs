"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import project_2_header from "../../../public/images/project_2_header.jpg";
import project_card from "../../../public/images/project_card.jpeg";

const ProjectPage = () => {
  const router = useRouter();
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    // Get the last part of the query param which represents projectId
    const id = window.location.search.slice(-1); 
    setProjectId(id);
  }, []);

  // Sample project titles and background images per project
  const projectDetails = {
    1: {
      backgroundImage: project_2_header, // Image imported from the public folder
    },
    // Add more project details here for other project IDs
  };

  // Sample data for cards
  const projectData = {
    1: [
      {
        id: 1,
        title: "Constructive and destructive waves",
        author: "Aditya Raj",
        imageUrl: project_card, // Using imported image for the card
        link: "", 
      },
      {
        id: 2,
        title: "Another Project Title",
        author: "John Doe",
        imageUrl: project_card, // Using the same image
        link: "",
      },
      {
        id: 3,
        title: "Yet Another Project",
        author: "Jane Smith",
        imageUrl: project_card,
        link: "",
      },
      // Add more objects as needed
    ],
  };

  const currentProjectData = projectId ? projectData[projectId] : [];
  const currentProjectDetails = projectId ? projectDetails[projectId] : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Background Image Section */}
      {currentProjectDetails && (
        <div className="relative w-full h-64 sm:h-80 lg:h-96"> {/* Remove bottom margin */}
        <Image
          src={project_2_header}
          alt="Full Width"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        </div>
      )}

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-12">
        {currentProjectData.length > 0 ? (
          currentProjectData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              author={card.author}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          ))
        ) : (
          <p>No cards found for this project.</p>
        )}
      </div>
    </div>
  );
};

const Card = ({ title, author, imageUrl, link }) => {
  return (
    <div className="w-288 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
      <div className="h-200 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive" 
          width={300}
          height={60}
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
