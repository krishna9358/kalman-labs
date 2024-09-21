
import HomeCard from "@/components/cards/HomeCard";
import { Container } from "@/components/layout/wireframe";
import { IconList } from "@/icons/Iconlist";
import { Button } from "@nextui-org/react";

import Card1 from "@/public/images/card1.png";

const cardData = [
	{
		heading:
			"Implementing REIPChain: A Decentralized Real Estate Investment Ecosystem",
		num: "I",
		img: Card1,
		content:
			"Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
	},
];

export default function Home() {
  	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Button
				radius="none"
				className="bg-[#D4AF37] text-medium"
				endContent={<IconList.ArrowTopRightOnSquareIcon className="w-5 h-5" />}
			>
				Glance In
			</Button>
			<Button
				radius="full"
				className="bg-black text-medium text-white w-[200px]"
				size="lg"
			>
				Dive In
			</Button>
			{/* container will be used to wrap the content==> on the very large screen as well it caters the standard width */}
			<Container>
				<h1>Hello World</h1>
			</Container>
			<HomeCard
				heading={cardData[0].heading}
				num={cardData[0].num}
				img={cardData[0].img}
				content={cardData[0].content}
			/>
		</div>
	);
}
