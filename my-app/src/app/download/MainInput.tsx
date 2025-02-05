"use client";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import DownloadBtn from "./DownloadBtn";
import { isValidUrl, isValidUserName } from "../config/utils/validators";

interface MainInputProps {
	resultCb: (value: string) => void;
}

const MainInput = ({ resultCb }: MainInputProps) => {
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState("");
	const [inputType, setInputType] = useState("url");

	const handleInputChange = () => {
		const trimmedInput = inputValue.trim();

		if (trimmedInput.startsWith("http")) {
			if (isValidUrl(trimmedInput)) {
				setInputError("");
				setInputType("url");
			} else {
				setInputError(
					"Please enter a valid link (Facebook, YouTube, Instagram)."
				);
			}
			return;
		}

		if (isValidUserName(trimmedInput)) {
			setInputError("");
			setInputType("username");
			return;
		}

		if (trimmedInput.length !== 0) {
			setInputError("Please enter a valid username.");
			return;
		}

		setInputError("");
	};

	useEffect(() => {
		handleInputChange();
	}, [inputValue]);

	return (
		<section className="w-100">
			<div className="h-dvh flex justify-center items-center flex-col">
				<h1 className="text-4xl mb-6 text-center">
					One Tool for All Your Downloads
				</h1>

				<Input
					placeholder="Paste a link or enter a username"
					type="text"
					radius="sm"
					size="lg"
					className="w-full md:w-1/2"
					color="primary"
					autoFocus
					errorMessage={inputError}
					isInvalid={!!inputError}
					value={inputValue}
					onValueChange={setInputValue}
					endContent={<FontAwesomeIcon icon={faDownload} />}
				/>

				<DownloadBtn
					title={inputType === "url" ? "Download Now" : "Get User Profile"}
					disabled={!!inputError}
					userInput={inputValue}
					resultCb={resultCb}
				/>
			</div>
		</section>
	);
};

export default MainInput;
