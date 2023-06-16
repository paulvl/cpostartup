/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
})

module.exports = nextConfig
