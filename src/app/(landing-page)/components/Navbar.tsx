"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import { useState } from "react";
import { Button } from "./ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menu from "./Menu";

const Navlinks = [
	{ href: "#about", title: "About" },
	{ href: "#projects", title: "Projects" },
	{ href: "#blog", title: "Blog" },
	{ href: "#contact", title: "Contact" },
];

function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212]">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					LOGO
				</Link>
				<div className="mobile-menu block md:hidden">
					{navbarOpen ? (
						<button
							className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<XMarkIcon className="w-5 h-5" />
						</button>
					) : (
						<button
							className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Bars3Icon className="w-5 h-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{Navlinks.map((link, index) => (
							<li key={index}>
								<Navlink href={link.href} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen && <Menu links={Navlinks} />}
		</nav>
	);
}
export default Navbar;
