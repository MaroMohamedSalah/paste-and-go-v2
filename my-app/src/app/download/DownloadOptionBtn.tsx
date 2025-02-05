"use client";
import { Button } from "@heroui/react";
import { useState } from "react";

interface BtnProps {
	label: string;
	link: string;
	mediaTitle: string;
}

const DownLoadOptionBtn = ({ label, link, mediaTitle }: BtnProps) => {
	const [loading, setLoading] = useState(false);

	const downloadFileWithName = async (url: string, fileName: string) => {
		setLoading(true);
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error("Failed to fetch the file.");

			const blob = await response.blob();

			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);
			link.download = fileName;

			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(link.href);
		} catch (error) {
			console.error("Error downloading the file:", error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<Button
			fullWidth
			color="primary"
			radius="sm"
			isLoading={loading}
			aria-label={`Download media in ${label}`}
			className="transition-all duration-200 hover:shadow-lg"
			onPress={() => {
				downloadFileWithName(
					link,
					`${mediaTitle.replaceAll(".", "").replaceAll(" ", "_")}`
				);
			}}
		>
			{loading ? "You're all set! Get ready to go!" : label}
		</Button>
	);
};

export default DownLoadOptionBtn;
