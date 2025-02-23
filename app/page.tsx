import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<Hero />
				<Stats />
				<About />
				<Projects />
				<Email />
			</div>
			<Footer />
		</div>
	);
}
