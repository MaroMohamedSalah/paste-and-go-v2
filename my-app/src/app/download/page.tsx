"use client";
import { useEffect, useState } from "react";
import MainInput from "./MainInput";
import Result from "./Result";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Download = () => {
	const [noScroll, setNoScroll] = useState(true);
	const [result, setResult] = useState({});

	useEffect(() => {
		setTimeout(() => {
			setNoScroll(Boolean(!Object.keys(result).length));
		}, 3000);
	}, [result]);

	return (
		<div>
			<motion.main>
				<div
					className={`container ${noScroll ? "overflow-hidden h-dvh" : "overflow-auto min-h-dvh"
						}`}
				>
					<AnimatePresence mode="popLayout">
						{Object.keys(result).length === 0 && (
							<motion.div
								key="input"
								initial={{ y: -1000, opacity: 0, scale: 0.5 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								exit={{ y: -1000, opacity: 0, scale: 0.5 }}
								transition={{ type: "spring", duration: 2.5 }}
								layout
							>
								<MainInput resultCb={setResult} />
							</motion.div>
						)}

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: "tween", duration: 1 }}
							layout
						>
							<Result result={result} />
						</motion.div>
					</AnimatePresence>

					<AnimatePresence mode="wait">
						{Object.keys(result).length !== 0 && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1, delay: 1 }}
							>
								<Button
									onPress={() => {
										setResult({});
									}}
									className="absolute top-3 right-3"
									variant="bordered"
									radius="full"
									color="secondary"
								>
									<FontAwesomeIcon icon={faChevronUp} />
								</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.main>
		</div>
	);
};

export default Download;
