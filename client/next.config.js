/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	appDir: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
	},
	images: {
		domains: ['localhost', 'cloudflare-ipfs.com'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4000/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4000/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
