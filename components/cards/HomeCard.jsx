"use client";

import React from "react";
import Bg from "@/public/images/homePageCardBg.png";
import Card1 from "@/public/images/card1.png";
import Image from "next/image"; // Import the 'Image' component from the appropriate library
import { IconList } from "@/icons/Iconlist";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';// Import the useRouter hook

const HomeCard = (props) => {
	const router = useRouter(); // Initialize the router for navigation

	const head = props.heading;
	const ind1 = head.indexOf(":");
	const head1 = head.slice(0, ind1 + 1);
	const head2 = head.slice(ind1 + 1);
	const num = props.num;
	const cardImg = props.img;
	const content = props.content;


	return (
		<div className="w-full sm:w-[75rem] p-4 flex justify-center flex-col sm:flex-row items-center bg-cover gap-[2.875rem] font-serif m-12 text-left">
			<Image
				src={cardImg}
				className=" w-[23.75rem] flex-1"
				alt="Home Card Background"
			/>
			<div className=" flex-[3] relative flex p-0 sm:p-6 flex-col items-center sm:items-start justify-center gap-2 sm:gap-6 mt-10">
				<div className=" absolute top-[-5rem] sm:top-[-16rem] sm:left-[-0.5rem] text-6xl sm:text-[18.25rem] sm:opacity-30 text-[#D4AF37]">
					<span className="opacity-75 sm:text-[8.75rem] mr-4">Section</span>
					{num}
				</div>
				<div>
					<h1 className="text-3xl font-bold sm:leading-normal sm:tracking-wide">
						{head1} <span className=" font-normal">{head2}</span>
					</h1>
				</div>
				<div>
					<p className="text-base font-light text-gray-500 leading-relaxed">
						{content}
					</p>
				</div>
				<Button
					radius="none"
					className="bg-[#D4AF37] w-[12.5rem] text-xl mt-8 p-6"
					endContent={
						<IconList.ArrowTopRightOnSquareIcon className="w-5 h-5" />
					}
					onClick={() => router.push('/project')}
				>
					Glance In
				</Button>
			</div>
		</div>
	);
};

export default HomeCard;
