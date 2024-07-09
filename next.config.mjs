/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'uploads-ssl.webflow.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
