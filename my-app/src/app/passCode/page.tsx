"use client";
import { InputOtp } from "@nextui-org/input-otp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VALID_PASS = "121224";

const PassCode = () => {
	const [passValue, setPassValue] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleValidateCode = () => {
		if (passValue === VALID_PASS) {
			router.push("download");
		} else {
			setError("Invalid Code.");
		}
	};

	useEffect(() => {
		if (passValue.length === VALID_PASS.length) {
			handleValidateCode();
		} else {
			setError("");
		}
	}, [passValue]);

	return (
		<div>
			<main>
				<div className="container flex justify-center items-center flex-col h-dvh">
					<h1 className="text-4xl mb-6 text-center">Enter Your Pass Code</h1>

					<InputOtp
						length={VALID_PASS.length}
						size="lg"
						variant="faded"
						color="primary"
						value={passValue}
						onValueChange={setPassValue}
						errorMessage={error}
						isInvalid={!!error}
						autoFocus
					/>
				</div>
			</main>
		</div>
	);
};

export default PassCode;
