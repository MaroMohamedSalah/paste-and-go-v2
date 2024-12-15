export default function Home() {
	const colors = [
		{ name: "Primary", className: "bg-primary", text: "text-text-primary" },
		{
			name: "Secondary",
			className: "bg-secondary",
			text: "text-text-primary",
		},
		{ name: "Success", className: "bg-success", text: "text-text-primary" },
		{ name: "Error", className: "bg-error", text: "text-text-primary" },
		{ name: "Warning", className: "bg-warning", text: "text-text-primary" },
		{ name: "Info", className: "bg-info", text: "text-text-primary" },
		{
			name: "Background Primary",
			className: "bg-bgPrimary",
			text: "text-text-primary",
		},
		{
			name: "Background Secondary",
			className: "bg-bgSecondary",
			text: "text-text-primary",
		},
		{
			name: "Hover Primary",
			className: "bg-hoverPrimary",
			text: "text-text-primary",
		},
		{
			name: "Hover Secondary",
			className: "bg-hoverSecondary",
			text: "text-text-primary",
		},
	];
	return (
		<div className="flex flex-col items-center p-8 bg-bgPrimary text-text-primary min-h-screen">
			<h1 className="text-3xl mb-6">Color Palette Demo</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{colors.map((color, index) => (
					<div
						key={index}
						className={`${color.className} rounded-lg p-4 flex items-center justify-center`}
						style={{ minHeight: "100px", minWidth: "150px" }}
					>
						<span className={color.text}>{color.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
