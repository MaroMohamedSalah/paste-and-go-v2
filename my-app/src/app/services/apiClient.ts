export const sendGetRequest = async (url: string, options: any) => {
	return fetch(url, {
		...options,
		method: "GET",
		cache: "force-cache",
	}).then((res) => {
		if (!res.ok) {
			throw new Error(`HTTP error: ${res.status}`);
		}
		return res.json();
	});
};
