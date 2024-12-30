import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="container min-h-dvh flex justify-center items-center">
				<Link href={"./passCode"} className="text-primary">
					Gooooo
				</Link>
			</div>
		</main>
	);
}
