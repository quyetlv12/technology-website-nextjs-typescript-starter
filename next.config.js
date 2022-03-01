/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['lh3.googleusercontent.com','placeimg.com']
  },
  env : {
    production : 'false'
  }
}

module.exports = nextConfig
