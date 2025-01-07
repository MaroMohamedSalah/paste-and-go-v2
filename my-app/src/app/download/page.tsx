"use client";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import DownloadBtn from "./DownloadBtn";

const Download = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState("");
	const [inputType, setInputType] = useState("url");

	const isUrl = () => {
		const regex =
			/(facebook\.com|fb\.watch|youtu(be\.com|\.be)|instagram\.com)\/.+/;
		return regex.test(inputValue);
	};

	const handleInputChange = () => {
		if (inputValue.startsWith("http")) {
			if (isUrl()) {
				setInputError("");
				setInputType("url");
			} else {
				setInputError(
					"Please enter a valid link (Facebook, YouTube, Instagram)."
				);
			}
		} else {
			setInputError("");
			setInputType("username");
		}
	};

	useEffect(() => {
		handleInputChange();
	}, [inputValue]);

	return (
		<div>
			<main>
				<div className="container flex justify-center items-center flex-col h-dvh">
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

					<div
						className={`${
							inputValue ? "opacity-100" : "opacity-0"
						} duration-75 ease-in-out`}
					>
						<DownloadBtn
							title={inputType === "url" ? "Download Now" : "Get User Profile"}
							disabled={!!inputError}
							userInput={inputValue}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Download;
