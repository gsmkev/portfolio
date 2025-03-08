"use client";

import Card from "./Card";
import { useEffect, useState, useRef } from "react";
import Tags from "./Tags";
import { motion, useInView } from "framer-motion";

interface ProjectFromApi {
	title: string;
	description: string;
	tags: string[];
	filename: string;
	githubUrl?: string;
	previewUrl?: string;
}

interface Project {
	title: string;
	description: string;
	tags: string[];
	image: string;
	githubUrl?: string;
	previewUrl?: string;
}

const tags = ["All", "Web", "Mobile"];

function Projects() {
	const [tag, setTag] = useState("All");

	const handleTagChange = (tag: string) => {
		setTag(tag);
	};

	const [projectsData, setProjectsData] = useState<Project[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/projects");
				const data = await response.json();
				const filteredData: Project[] = data.docs.map(
					(project: ProjectFromApi) => ({
						title: project.title,
						description: project.description,
						tags: project.tags,
						image:
							(process.env.NEXT_PUBLIC_VERCEL_BLOB_BASE_URL || "") +
							(project.filename ? project.filename.replace(/\s/g, "%20") : ""),
						githubUrl: project.githubUrl,
						previewUrl: project.previewUrl,
					})
				);
				setProjectsData(filteredData);
			} catch (error) {
				console.error("Error fetching projects data:", error);
			}
		};
		fetchData();
	}, []);

	const filteredProjects = projectsData.filter((project) => {
		if (tag === "All") return true;
		return project.tags.includes(tag);
	});

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section>
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
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						variants={cardVariants}
						key={index}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.2 }}
					>
						<Card
							key={index}
							title={project.title}
							description={project.description}
							imageUrl={project.image}
							githubUrl={project.githubUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
}
export default Projects;
