export const ENDPOINTS = {
	fb: (videoUrl: string) =>
		`https://vkrdownloader1.p.rapidapi.com/server?vkr=${videoUrl}`,
	yt: (videoUrl: string) =>
		`https://vkrdownloader1.p.rapidapi.com/server?vkr=${videoUrl}`,
	ig_user_info: (user_or_url: string) =>
		`https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${user_or_url}`,
	ig_reel: (reelUrl: string) =>
		`https://instagram-api41.p.rapidapi.com/url?url=${reelUrl}`,
};
