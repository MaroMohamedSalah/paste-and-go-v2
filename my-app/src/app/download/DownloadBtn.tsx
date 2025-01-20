"use client";
import { Button } from "@nextui-org/react";
import { sendGetRequest } from "../services/apiClient";
import { ENDPOINTS } from "../config/endpoints";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DownloadBtnProps {
	title: string;
	disabled?: boolean;
	userInput: string;
	resultCb: Function;
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
	resultCb,
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
			.then((result) => resultCb({ platform: "facebook", data: result.data }))
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
			.then((result) => resultCb({ platform: "youtube", data: result }))
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
		<motion.div
			initial={{ rotate: -3, scale: 1.3, opacity: 0 }}
			animate={userInput && { opacity: 1, scale: 1, rotate: 0 }}
			whileHover={{ rotate: -3, scale: 1.3 }}
		>
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
		</motion.div>
	);
};

export default DownloadBtn;
