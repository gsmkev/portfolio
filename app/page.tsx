import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<Hero />
			</div>
		</div>
	);
}
