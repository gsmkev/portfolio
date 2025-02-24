"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const tabsData = [
	{
		id: "fullstack",
		name: "Fullstack",
		content: (
			<ul>
				<li>React</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
			</ul>
		),
	},
	{
		id: "mobile",
		name: "Mobile",
		content: (
			<ul>
				<li>React Native</li>
				<li>Flutter</li>
			</ul>
		),
	},
	{
		id: "education",
		name: "Education",
		content: (
			<ul>
				<li className="mb-2">
					<span className="font-semibold">
						Bachelor&apos;s Degree in Computer Science
					</span>
				</li>
				<li className="mb-2">
					<span className="text-gray-300">Facultad Politécnica</span>
					<span className="block text-sm text-gray-400">
						National University of Asunción, Paraguay
					</span>
				</li>

				<li className="mb-2">
					<span className="font-semibold">
						Computer Science Technical High School
					</span>
				</li>
				<li className="mb-2">
					<span className="text-gray-300">
						Technical School and Vocational Training Center
					</span>
					<span className="block text-sm text-gray-400">
						Asunción, Paraguay
					</span>
				</li>
			</ul>
		),
	},
];

function About() {
	const [tabs, setTabs] = useState(tabsData[0].id);
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (tab: string) => {
		startTransition(() => {
			setTabs(tab);
		});
	};

	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 items-center px-4 gap-8 py-8 xl:gap-16 xl:py-16">
				<Image
					src="/images/about.png"
					alt="About"
					width={500}
					height={500}
					className="rounded-lg"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
						aliquam labore non numquam quia accusamus magni, quod fugiat at
						ipsam? Culpa commodi quis expedita veniam unde? Doloribus, sed?
						Harum, mollitia.
					</p>
					<div className="flex flex-row justify-start mt-8">
						{tabsData.map((tab) => (
							<TabButton
								key={tab.id}
								selectTab={() => handleTabChange(tab.id)}
								active={tabs === tab.id}
							>
								{tab.name}
							</TabButton>
						))}
					</div>
					<div className="mt-8">
						{isPending ? (
							<p>Loading...</p>
						) : (
							tabsData.map((tab) => (
								<div key={tab.id} hidden={tabs !== tab.id}>
									{tab.content}
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;
