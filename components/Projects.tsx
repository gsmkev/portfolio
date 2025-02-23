"use client";

import Card from "./Card";
import { useState } from "react";
import Tags from "./Tags";

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description: "Project 1 description",
		image: "/images/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Potography Portfolio Website",
		description: "Project 2 description",
		image: "/images/projects/2.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "E-commerce Application",
		description: "Project 3 description",
		image: "/images/projects/3.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Food Ordering Application",
		description: "Project 4 description",
		image: "/images/projects/4.png",
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "React Firebase Template",
		description: "Authentication and CRUD operations",
		image: "/images/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Full-stack Roadmap",
		description: "Project 5 description",
		image: "/images/projects/6.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

const tags = ["All", "Web", "Mobile"];

function Projects() {
	const [tag, setTag] = useState("All");

	const handleTagChange = (tag: string) => {
		setTag(tag);
	};

	const filteredProjects = projectsData.filter((project) => {
		if (tag === "All") return true;
		return project.tag.includes(tag);
	});

	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				{tags.map((tagItem) => (
					<Tags
						key={tagItem}
						name={tagItem}
						onClick={handleTagChange}
						isSelected={tagItem === tag}
					/>
				))}
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<Card
						key={project.id}
						title={project.title}
						description={project.description}
						imageUrl={project.image}
					/>
				))}
			</div>
		</>
	);
}
export default Projects;
