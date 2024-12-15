import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="container">
				<Link href={"./passCode"}>GO</Link>
			</div>
		</main>
	);
}
