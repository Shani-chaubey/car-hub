/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = false;
        return config;
      },
      images: {
        domains: ["cdn.imagin.studio"]
    }
};

export default nextConfig;
