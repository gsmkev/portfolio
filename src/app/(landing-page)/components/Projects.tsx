"use client";

import Card from "./Card";
import { useEffect, useState } from "react";
import Tags from "./Tags";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tags = ["All", "Web", "Mobile"];

function Projects() {
	const [tag, setTag] = useState("All");

	const handleTagChange = (tag: string) => {
		setTag(tag);
	};

  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        const filteredData = data.docs.map((project: any) => ({
          title: project.title,
          description: project.description,
          tag: project.tag,
          image: (process.env.NEXT_PUBLIC_VERCEL_BLOB_BASE_URL || "") + 
            (project.filename ? project.filename.replace(/\s/g, "%20") : ""),
        }));
        setProjectsData(filteredData);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };
    fetchData();
  }, []);

	const filteredProjects = projectsData.filter((project) => {
		if (tag === "All") return true;
		return project.tag.includes(tag);
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
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
}
export default Projects;
