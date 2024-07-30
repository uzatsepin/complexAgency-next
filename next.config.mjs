/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'pb.razdev.website',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
