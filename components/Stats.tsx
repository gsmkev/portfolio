"use client";

import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const metrics = [
	{ name: "Projects", value: 10, prefix: "" },
	{ name: "Hours", value: 100, prefix: "+" },
	{ name: "Certificates", value: 5, prefix: "" },
	{ name: "Frameworks", value: 6, prefix: "~" },
];

function Stats() {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="border-[#33353F] border rounded-md py-8 px-1 flex flex-col sm:flex-row items-center justify-between">
				{metrics.map((metric, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center mx-4 my-2 sm:my-0"
					>
						<h2 className="text-white text-4xl font-bold flex flex-row">
							{metric.prefix}
							<AnimatedNumbers
								animateToNumber={metric.value}
								transitions={(index) => ({
									type: "spring",
									duration: index + 0.5,
								})}
							/>
						</h2>
						<p className="text-[#ADB7BE] text-base">{metric.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Stats;
