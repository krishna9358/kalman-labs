"use client";

import React, { useRef } from "react";
import HomeCard from "@/components/cards/HomeCard";
import { Container } from "@/components/layout/wireframe";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Wave from "@/public/images/Wave.svg";
import SecondBackground from "@/public/images/Rectangle.png";
import ScientistImage from "@/public/images/Scientist.png";
import Card1 from "@/public/images/card1.png";
import AboutUs from "@/components/aboutus/AboutUs";
import CornerImage1 from "@/public/images/bottom_corner.png";
import CornerImage2 from "@/public/images/top_corner.png";
import IconImage1 from "@/public/images/icon1.png";
import IconImage2 from "@/public/images/icon2.png";
import SeparatorImage from "@/public/images/Group_sep.png"; 
import CardBackground from "@/public/images/Group_proj.png";
import AppProjectCard from "@/components/cards/AppProjectCard";

const cardData = [
  {
    heading: "Implementing REIPChain: A Decentralized Real Estate Investment Ecosystem",
    num: "I",
    img: Card1,
    content: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.",
  },
  {
    heading: "Project Two: An Innovative Solution for Urban Farming",
    num: "II",
    img: Card1,
    content: "Suspendisse potenti. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    heading: "Project Three: Advancements in Renewable Energy",
    num: "III",
    img: Card1,
    content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
];

const projectCardData = [
	{
		projectName: "Project 1",
		imageSrc: Card1,
		title: "Project Three: Advancements in Renewable Energy",
	},
	{
		projectName: "Project 2",
		imageSrc: Card1,
		title: "Project Three: Advancements in Renewable Energy",
	},
	{
		projectName: "Project 3",
		imageSrc: Card1,
		title: "Project Three: Advancements in Renewable Energy",
	},
	{
		projectName: "Project 4",
		imageSrc: Card1,
		title: "Project Three: Advancements in Renewable Energy",
	},
];

export default function Home() {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 mt-0 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* First Full-width background image */}
      <div className="relative w-full h-[600px] mb-0 w-screen"> {/* Remove bottom margin */}
        <Image
          src={Wave}
          alt="Full Width"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ready to explore the depths of
          </h1>
          <p className="mb-6 text-4xl font-extrabold">
            <span className="text-5xl font-extrabold">Constructed Intelligence</span>
          </p>
          <Button
            radius="full"
            className="bg-black text-medium text-white w-[200px]"
            size="lg"
            onClick={scrollToAboutUs}
          >
            Dive In
          </Button>
        </div>
      </div>

      {/* Second background section */}
      <div className="relative h-[400px] w-screen w-full mb-0">
		<Image
			src={SecondBackground}
			alt="Second Background"
			layout="fill"
			objectFit="cover"
			className="absolute inset-0 z-0"
		/>
		<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 sm:p-8">
			{/* Scientist image moved slightly up */}
			<div className="flex items-center mt-[-20px] sm:mt-[-30px]">
			<div className="relative mr-6">
				<Image
				src={ScientistImage}
				alt="Scientist"
				width={120}
				height={120}
				className="rounded-full" // Added rounded corners
				/>
				{/* Icon image at top-left of the Scientist image */}
				<div className="absolute top-0 left-0 z-10">
				<Image
					src={IconImage1}
					alt="Icon 1"
					width={30}
					height={30}
				/>
				</div>
			</div>

			{/* Quote and scientist's name next to the image */}
			<div className="relative flex flex-col items-start">
				<p className="text-lg sm:text-xl font-serif italic mb-2 mt-4 text-center sm:text-left">
				"A year spent in artificial intelligence <br />
				is enough to make one believe in God."
				</p>
				<p className="font-bold">- Alan Perlis</p>
				{/* Adjust icon position relative to the quote */}
				<div className="absolute bottom-[-60px] left-[-60px] sm:bottom-[-80px] sm:left-[-80px] z-10">
				<Image
					src={IconImage2}
					alt="Icon 2"
					layout="responsive" 
					width={30}
					height={30}
				/>
				</div>
			</div>
			</div>
		</div>

		{/* Corner images */}
		<div className="absolute top-0 right-0 z-10 w-[15%] sm:w-[150px]">
			<Image
			src={CornerImage2}
			alt="Corner Image 1"
			layout="responsive" // Makes it responsive
			width={150}
			height={150}
			/>
		</div>
		<div className="absolute bottom-0 left-0 z-10 w-[30%] sm:w-[400px]">
			<Image
			src={CornerImage1}
			alt="Corner Image 2"
			layout="responsive" // Makes it responsive
			width={400}
			height={100}
			/>
		</div>
		</div>


      {/* Reference for About Us component */}
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>

      {/* Big title "Our Research" section */}
      <div className="flex flex-col items-center mb-0 mt-12"> {/* Removed margin-bottom */}
        <Image
          src={SeparatorImage}
          alt="Separator"
		  layout="responsive" 
          width={300}
          height={60}
        />
        <h2 className="text-6xl font-bold mt-16 mb-6">Our Research</h2>
      </div>

      {/* Map over cardData to render multiple HomeCard components */}
      {cardData.map((card, index) => (
		<div key={index} className="relative w-full mb-0"> {/* Remove margin-bottom */}
		  {/* Background image before each card */}
		  <div className="relative h-[300px] w-full mb-0"> {/* Remove margin-bottom */}
			<Image
			  src={CardBackground}
			  alt="Card Background"
			  layout="responsive" 
			  objectFit="cover"
			/>
		  </div>
	  
		  {/* HomeCard content starts below the background */}
		  <div className="relative z-10 mt-[-200px]"> {/* Increase negative margin to close gap */}
			<HomeCard
			  heading={card.heading}
			  num={card.num}
			  img={card.img}
			  content={card.content}
			/>
		  </div>
		</div>
	  ))}	  
		{/* Big title "Our Research" section */}
		<div className="flex flex-col items-center mb-0 mt-12"> {/* Removed margin-bottom */}
		<Image
			src={SeparatorImage}
			alt="Separator"
			layout="responsive" 
			width={300}
			height={60}
		/>
		<h2 className="text-5xl font-bold mt-16 mb-10">Ongoing Projects</h2>
		</div>
		
		<div className="overflow-x-auto whitespace-nowrap mb-0 w-full"> {/* Set to full width */}
			<div className="flex"> {/* Remove w-full from the flex container */}
				{projectCardData.map((card, index) => (
				<div
					key={index}
					className={`relative w-[calc(50%)] mr-4 ${
					index % 2 === 0 ? "bg-white" : "bg-yellow-200"
					}`}
					style={{ minWidth: "100px", flexShrink: 0, padding: "70px" }} // Ensure a minimum width for each card
				>
					<div className="p-10"> {/* Smaller padding for the actual card */}
					<AppProjectCard
						title={card.title}
						imageSrc={card.imageSrc}
						projectName={card.projectName}
					/>
					</div>
				</div>
				))}
			</div>
		</div>



      {/* Container will be used to wrap the content on very large screens */}
      <Container>
        {/* Any additional content can go here */}
      </Container>
    </div>
  );
}
