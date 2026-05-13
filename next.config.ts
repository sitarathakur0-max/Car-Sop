/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Agar aapko aur bhi domains add karne hain to yaha add karein
      // {
      //   protocol: 'https',
      //   hostname: 'another-domain.com',
      //   pathname: '/**',
      // }
    ],
  },
}

module.exports = nextConfig