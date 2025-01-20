"use client";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Result = ({ result }: any) => {
	const [paths, setPaths] = useState({
		thumbnail: "",
		title: "",
		downloads: [{}],
	});

	const pathsNormalization = () => {
		switch (result.platform) {
			case "facebook":
				setPaths({
					thumbnail: result.data.thumbnail,
					title: result.data.title,
					downloads: linkDataNormalization("facebook", result.data?.downloads),
				});
				break;
			case "youtube":
				setPaths({
					thumbnail:
						result.data.stats.thumbnails[2]?.url ||
						result.data.stats.thumbnails[1]?.url ||
						result.data.stats.thumbnails[0]?.url,
					title: result.data.description,
					downloads: linkDataNormalization("youtube", result.data?.links),
				});
				break;

			default:
				break;
		}
	};

	const linkDataNormalization = (
		platform: string,
		downloads: any[]
	): { link: string; label: string }[] => {
		switch (platform) {
			case "facebook":
				return downloads.map((item) => ({
					link: item.url,
					label: item.format_id,
				}));
			case "youtube":
				return downloads
					.filter((item) => item.renderLink)
					.map((item) => ({
						link: item.link,
						label: item.qualityLabel,
					}));
			default:
				return [];
		}
	};

	const mapDownloadLinks = () => {
		return paths.downloads?.map((option: any, index: number) => (
			<motion.div
				key={`download-option-${option.label}-${index}`}
				className="download-option-wrapper"
				initial={{ opacity: 0, y: 9 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				transition={{ delay: index * 0.15 }}
			>
				<Link href={option.link} target="_blank">
					<Button
						fullWidth
						color="primary"
						radius="sm"
						aria-label={`Download media in ${option.label}`}
						className="transition-all duration-200 hover:shadow-lg"
					>
						{option.label}
					</Button>
				</Link>
			</motion.div>
		));
	};

	useEffect(() => {
		console.log(result);
		pathsNormalization();
	}, [result]);

	useEffect(() => {
		console.log(paths);
	}, [paths]);
	return (
		<section className="mb-5 mt-20">
			<header>
				<div className="thumbnail rounded min-h-96 flex justify-center items-center bg-bgSecondary relative">
					{paths.thumbnail ? (
						<Image
							src={paths.thumbnail}
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

				<h1 className="title my-3 text-center">{paths.title}</h1>
			</header>

			<div className="downloadOpts mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
				{mapDownloadLinks()}
			</div>
		</section>
	);
};

export default Result;
