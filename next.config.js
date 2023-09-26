/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://imgur.com/", "https://i.imgur.com/","i.imgur.com", "cdn.sanity.io","https://www.hpep.ge/"],
  },
};
