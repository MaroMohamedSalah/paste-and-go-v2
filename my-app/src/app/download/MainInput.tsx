"use client";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import DownloadBtn from "./DownloadBtn";

interface MainInputProps {
	resultCb: Function;
}

const MainInput = ({ resultCb }: MainInputProps) => {
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
