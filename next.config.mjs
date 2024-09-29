/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.modelsofauthority.ac.uk',
      },
    ],
  },
}

export default nextConfig
