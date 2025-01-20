"use client";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Result = ({ result }: any) => {
	useEffect(() => {
		console.log(result);
	}, [result]);
	return (
		<section className="mb-5 mt-20">
			<header>
				<div className="thumbnail rounded min-h-96 flex justify-center items-center bg-bgSecondary relative">
					{result.thumbnail ? (
						<Image
							src={result.thumbnail}
							className="object-contain rounded"
							alt="Media Thumbnail"
							fill
							onLoadStart={() => "start loading"}
							onLoadingComplete={() => "end loading"}
						/>
					) : (
						<FontAwesomeIcon className="text-5xl" icon={faImage} />
					)}
				</div>

				<h1 className="title my-3 text-center">{result.title}</h1>
			</header>

			<div className="downloadOpts mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
				{result.downloads?.map((option: any, index: number) => (
					<motion.div
						key={`download-option-${option.format_id}-${index}`}
						className="download-option-wrapper"
						initial={{ opacity: 0, y: 9 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ delay: index * 0.15 }}
					>
						<Button
							fullWidth
							color="primary"
							radius="sm"
							aria-label={`Download option in ${option.format_id}`}
							className="transition-all duration-200 hover:shadow-lg"
						>
							<Link href={option.url} target="_blank">
								{option.format_id}
							</Link>
						</Button>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Result;
