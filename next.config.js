/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com','placeimg.com']
  },
  env: {
    // NODE_ENV: "development",
    CLIENT_ID_GITHUB : process.env.NODE_ENV === 'development' ? '6fac1b9dc1a15aa4a863' : '76eec1e1d8353fad1605',
    BASE_API : process.env.NODE_ENV === 'development' ? "http://localhost:4000/api" : 'https://bloggerapi1.herokuapp.com/api',
    API_LOGIN_GOOGLE : process.env.NODE_ENV === 'development' ? "http://localhost:4000/auth/google" : 'https://bloggerapi1.herokuapp.com/auth/google'
  },
}

module.exports = nextConfig
