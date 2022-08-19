/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['vls-api.herokuapp.com']
  },
  env: {
    // NODE_ENV: "development",
  },
}

module.exports = nextConfig
