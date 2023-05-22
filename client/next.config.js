/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	appDir: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		domains: ['localhost', 'cloudflare-ipfs.com'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.REACT_APP_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.REACT_APP_SERVER_URL}/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
