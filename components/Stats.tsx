const metrics = [
	{ name: "Projects", value: "10" },
	{ name: "Hours", value: "100+" },
	{ name: "Certificates", value: "5" },
	{ name: "Frameworks", value: "6" },
];

function Stats() {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
				{metrics.map((metric, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center mx-4"
					>
						<h2 className="text-white text-4xl font-bold">{metric.value}</h2>
						<p className="text-[#ADB7BE] text-base">{metric.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default Stats;
