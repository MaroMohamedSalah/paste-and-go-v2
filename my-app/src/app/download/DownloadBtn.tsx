"use client";
import { Button } from "@nextui-org/react";
import { sendGetRequest } from "../services/apiClient";
import { ENDPOINTS } from "../config/endpoints";
import { useState } from "react";

interface DownloadBtnProps {
	title: string;
	disabled?: boolean;
	userInput: string;
}

enum MEDIA {
	FB = "fb",
	YT = "yt",
	USER = "user",
	IG = "ig",
}

const DownloadBtn = ({
	title,
	disabled = false,
	userInput,
}: DownloadBtnProps) => {
	const [loading, setLoading] = useState(false);

	const isUrl = (type: MEDIA) => {
		switch (type) {
			case MEDIA.YT:
				return (
					userInput.includes("youtube.com") || userInput.includes("youtu.be")
				);
			case MEDIA.FB:
				return (
					userInput.includes("facebook.com") || userInput.includes("fb.watch")
				);
			case MEDIA.IG:
				return userInput.includes("instagram.com");
			default:
				return false;
		}
	};

	const facebookVideoDownload = () => {
		setLoading(true);
		sendGetRequest(ENDPOINTS.fb.url(userInput), {
			headers: ENDPOINTS.fb.headers,
		})
			.then((data) => console.log(data))
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
	};

	const youtubeVideoDownload = () => {
		setLoading(true);
		sendGetRequest(ENDPOINTS.yt.url(userInput), {
			headers: ENDPOINTS.yt.headers,
		})
			.then((data) => console.log(data))
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
	};

	const handleDownload = () => {
		switch (true) {
			case isUrl(MEDIA.FB):
				facebookVideoDownload();
				break;

			case isUrl(MEDIA.YT):
				youtubeVideoDownload();
				break;

			default:
				break;
		}
	};

	return (
		<Button
			variant="solid"
			radius="sm"
			color="primary"
			className="my-5"
			isLoading={loading}
			disabled={disabled}
			onClick={() => handleDownload()}
		>
			{title}
		</Button>
	);
};

export default DownloadBtn;
