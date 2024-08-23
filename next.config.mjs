/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'developers.elementor.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'pb.razdev.website',
                port: '',
                pathname: '/**'
            },
        ]
    }
};

export default nextConfig;
