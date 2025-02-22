"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
							Hello, I'm{" "}
						</span>
						<TypeAnimation
							sequence={[
								"Kevin",
								1000,
								"a Fullstack Developer",
								1000,
								"a Mobile Developer",
								1000,
								"a CS Student",
								1000,
							]}
							wrapper="span"
							speed={1}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
						temporibus consectetur deleniti aliquam, voluptatum quibusdam labore
						laborum expedita aspernatur autem id dolor earum reiciendis officiis
						quae minus culpa quia veniam.
					</p>
					<div>
						<Button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-cyan-700 to-blue-500 hover:bg-slate-200 text-white">
							Contact Me
						</Button>
						<Button className="relative inline-block w-full sm:w-fit rounded-full p-[2px] bg-gradient-to-br from-green-500 via-cyan-700 to-blue-500 hover:bg-slate-800 border border-transparent mt-3">
							<span className="block w-full h-full bg-[#121212] text-white rounded-full px-6 py-2 text-center">
								Download CV
							</span>
						</Button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
						<Image
							src="/images/hero.png"
							alt="Hero"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover w-[95%] h-[95%]"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
