/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["asset.cloudinary.com", "res.cloudinary.com"], // Add any external domains here
  },
  experimental: {
    appDir: true,
  },
  // Add important SEO-related config
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable compression
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
