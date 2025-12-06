/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bdsapi.bwdemo.in",
      },
      {
        protocol: "https",
        hostname: "n84j51mp-3001.inc1.devtunnels.ms",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
