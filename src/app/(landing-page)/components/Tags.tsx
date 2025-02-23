function Tags({
	name,
	onClick,
	isSelected,
}: {
	name: string;
	onClick: (tag: string) => void;
	isSelected: boolean;
}) {
	return (
		<button
			className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
				isSelected
					? "border-green-500"
					: "border-slate-600 hover:border-green-500"
			}`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
}
export default Tags;
