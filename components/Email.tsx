"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";

function Email() {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 py-24 gap-8 relative"
		>
			<div className="absolute inset-0 flex justify-start place-items-end">
				<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 blur-3xl opacity-50"></div>
			</div>

			<div className="relative z-10">
				<h5 className="text-xl font-bold text-white mb-3">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-5 max-w-md">
					I&apos;m currently looking for new opportunities. My inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>

				<div className="flex gap-4">
					<Link
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/images/icons/github.svg"
							alt="GitHub Icon"
							width={24}
							height={24}
						/>
					</Link>
					<Link
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/images/icons/linkedin.svg"
							alt="LinkedIn Icon"
							width={24}
							height={24}
						/>
					</Link>
				</div>
			</div>
			<div className="relative z-10">
				<form onSubmit={handleSubmit} className="flex flex-col">
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block text-sm font-medium mb-2"
						>
							Your Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={formData.email}
							onChange={handleChange}
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-green-500 focus:outline-none"
							placeholder="jacob@google.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block text-sm font-medium mb-2"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							required
							value={formData.subject}
							onChange={handleChange}
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-green-500 focus:outline-none"
							placeholder="Just saying hi"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm font-medium mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							required
							value={formData.message}
							onChange={handleChange}
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-green-500 focus:outline-none"
							placeholder="Let's talk about..."
						/>
					</div>

					<button
						type="submit"
						className="bg-gradient-to-br from-green-500 via-cyan-700 to-blue-500 transition-all duration-200 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Email;
