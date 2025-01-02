import { Button } from "@nextui-org/react";

interface DownloadBtnProps {
	title: string;
	cb: Function;
	loading?: boolean;
	disabled?: boolean;
}

const DownloadBtn = ({
	title,
	cb,
	loading = false,
	disabled = false,
}: DownloadBtnProps) => {
	return (
		<Button
			variant="solid"
			radius="sm"
			color="primary"
			className="my-5"
			isLoading={loading}
			disabled={disabled}
		>
			{title}
		</Button>
	);
};

export default DownloadBtn;
