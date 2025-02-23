import Navlink from "./Navlink";

function Menu({ links }: { links: { href: string; title: string }[] }) {
	return (
		<ul className="flex flex-col py-4 items-center ">
			{links.map((link, index) => (
				<li key={index}>
					<Navlink href={link.href} title={link.title} />
				</li>
			))}
		</ul>
	);
}

export default Menu;
