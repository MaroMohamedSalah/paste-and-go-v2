export const ENDPOINTS = {
	fb: {
		url: (videoUrl: string) =>
			`https://vkrdownloader1.p.rapidapi.com/server?vkr=${videoUrl}`,
		headers: {
			"x-rapidapi-key": "251033cf4emshf3054a8b4557678p1fac0ajsn81864a3c4d44",
			"x-rapidapi-host": "vkrdownloader1.p.rapidapi.com",
		},
	},
	yt: {
		url: (videoUrl: string) =>
			`https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo?url=${videoUrl}`,
		headers: {
			"x-rapidapi-key": "251033cf4emshf3054a8b4557678p1fac0ajsn81864a3c4d44",
			"x-rapidapi-host": "youtube-video-and-shorts-downloader1.p.rapidapi.com",
		},
	},
	ig_user_info: (user_or_url: string) =>
		`https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${user_or_url}`,
	ig_reel: {
		url: (reelUrl: string) =>
			`https://instagram-reels-downloader-api.p.rapidapi.com/download?url=${reelUrl}`,
		headers: {
			"x-rapidapi-key": "251033cf4emshf3054a8b4557678p1fac0ajsn81864a3c4d44",
			"x-rapidapi-host": "instagram-reels-downloader-api.p.rapidapi.com",
		},
	},
};
