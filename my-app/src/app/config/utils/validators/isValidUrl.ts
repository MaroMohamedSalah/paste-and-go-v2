export const isValidUrl = (url: string) => {
    const validDomains = ['facebook.com', 'fb.watch', 'youtube.com', 'youtu.be', 'instagram.com'];
    return validDomains.some((domain) => url.includes(domain));
};