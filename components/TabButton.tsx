interface TabButtonProps {
	active: boolean;
	selectTab: () => void;
	children: React.ReactNode;
}

function TabButton({ active, selectTab, children }: TabButtonProps) {
	return (
		<button onClick={() => selectTab()}>
			<p
				className={`mr-3 font-semibold ${
					active
						? "text-white border-b border-green-500"
						: "text-[#ADB7BE] hover:border-b hover:text-[#ADB7BE] hover:border-green-800"
				}`}
			>
				{children}
			</p>
		</button>
	);
}
export default TabButton;
