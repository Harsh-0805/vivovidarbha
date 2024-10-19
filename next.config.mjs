/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["asset.cloudinary.com", "res.cloudinary.com"], // Add any external domains here
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
