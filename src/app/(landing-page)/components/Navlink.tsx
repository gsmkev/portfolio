import { MouseEvent } from "react";

interface NavlinkProps {
	href: string;
	title: string;
	onClick?: () => void;
}

function Navlink({ href, title, onClick }: NavlinkProps) {
	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const section = document.querySelector(href);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		if (onClick) onClick();
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
		>
			{title}
		</a>
	);
}

export default Navlink;
